from flask import Blueprint, jsonify, request
import os
import pandas as pd
import nltk
import pickle
import re, string, random
from nltk.tag import pos_tag
from nltk.tokenize import word_tokenize
from nltk.stem.wordnet import WordNetLemmatizer
from nltk.corpus import twitter_samples, stopwords
from nltk import FreqDist, classify, NaiveBayesClassifier
from bs4 import BeautifulSoup
import urllib3
import json
import numpy as np

nltk.download('punkt')
nltk.download('wordnet')
nltk.download('stopwords')
nltk.download('twitter_samples')
nltk.download('averaged_perceptron_tagger')

stop_words = set(stopwords.words('english')) 
max_text_len=100
http=urllib3.PoolManager()
Abbr_dict={}
linkDict=[]     #Generating a-z
for x in range(97,123):
    linkDict.append(chr(x))

def getAbbr(alpha):
    global Abbr_dict
    r=http.request('GET','https://www.noslang.com/dictionary/'+alpha)
    soup=BeautifulSoup(r.data,'html.parser')
    
    for i in soup.findAll('div',{'class':'dictionary-word'}): 
        abbr=i.find('abbr')['title']
        Abbr_dict[i.find('span').text[:-2]]=abbr

for i in linkDict:  #Creating Links 
    getAbbr(i)

basePath =os.path.dirname(os.path.abspath(__file__))
pickle_in = open(basePath + "/nb_sentiment_analysis_final.pkl","rb")
classifier = pickle.load(pickle_in)
print("Loaded sentimentclassifier")
data = pd.read_csv(basePath + "/testing_seq2seq.csv")
print("Loaded testing.csv") 
meta_data = pd.read_json(basePath + "/product_details_meta.json")
print("Loaded metadata")
summary_data = pd.read_json(basePath + "/result_final.json")
print("Loaded final summary json")
contraction_mapping = {"ain't": "is not", "aren't": "are not","can't": "cannot", "'cause": "because", "could've": "could have", "couldn't": "could not",
                           "didn't": "did not",  "doesn't": "does not", "don't": "do not", "hadn't": "had not", "hasn't": "has not", "haven't": "have not",
                           "he'd": "he would","he'll": "he will", "he's": "he is", "how'd": "how did", "how'd'y": "how do you", "how'll": "how will", "how's": "how is",
                           "I'd": "I would", "I'd've": "I would have", "I'll": "I will", "I'll've": "I will have","I'm": "I am", "I've": "I have", "i'd": "i would",
                           "i'd've": "i would have", "i'll": "i will",  "i'll've": "i will have","i'm": "i am", "i've": "i have", "isn't": "is not", "it'd": "it would",
                           "it'd've": "it would have", "it'll": "it will", "it'll've": "it will have","it's": "it is", "let's": "let us", "ma'am": "madam",
                           "mayn't": "may not", "might've": "might have","mightn't": "might not","mightn't've": "might not have", "must've": "must have",
                           "mustn't": "must not", "mustn't've": "must not have", "needn't": "need not", "needn't've": "need not have","o'clock": "of the clock",
                           "oughtn't": "ought not", "oughtn't've": "ought not have", "shan't": "shall not", "sha'n't": "shall not", "shan't've": "shall not have",
                           "she'd": "she would", "she'd've": "she would have", "she'll": "she will", "she'll've": "she will have", "she's": "she is",
                           "should've": "should have", "shouldn't": "should not", "shouldn't've": "should not have", "so've": "so have","so's": "so as",
                           "this's": "this is","that'd": "that would", "that'd've": "that would have", "that's": "that is", "there'd": "there would",
                           "there'd've": "there would have", "there's": "there is", "here's": "here is","they'd": "they would", "they'd've": "they would have",
                           "they'll": "they will", "they'll've": "they will have", "they're": "they are", "they've": "they have", "to've": "to have",
                           "wasn't": "was not", "we'd": "we would", "we'd've": "we would have", "we'll": "we will", "we'll've": "we will have", "we're": "we are",
                           "we've": "we have", "weren't": "were not", "what'll": "what will", "what'll've": "what will have", "what're": "what are",
                           "what's": "what is", "what've": "what have", "when's": "when is", "when've": "when have", "where'd": "where did", "where's": "where is",
                           "where've": "where have", "who'll": "who will", "who'll've": "who will have", "who's": "who is", "who've": "who have",
                           "why's": "why is", "why've": "why have", "will've": "will have", "won't": "will not", "won't've": "will not have",
                           "would've": "would have", "wouldn't": "would not", "wouldn't've": "would not have", "y'all": "you all",
                           "y'all'd": "you all would","y'all'd've": "you all would have","y'all're": "you all are","y'all've": "you all have",
                           "you'd": "you would", "you'd've": "you would have", "you'll": "you will", "you'll've": "you will have",
                           "you're": "you are", "you've": "you have"}

main = Blueprint('main', __name__)

@main.route('/generatesummary', methods=['POST'])
def generatesummary():
    product = request.get_json()
    print("from request: ", product)
    if product and "product_id" in product:
        product_id = product["product_id"]
    else:
        product_id = None
    
    def text_cleaner(text,num):
        newString = text.lower()
        newString = BeautifulSoup(newString, "lxml").text
        newString = re.sub(r'\([^)]*\)', '', newString)
        newString = re.sub('"','', newString)
        newString = ' '.join([contraction_mapping[t] if t in contraction_mapping else t for t in newString.split(" ")])    
        newString = re.sub(r"'s\b","",newString)
        newString = re.sub("[^a-zA-Z]", " ", newString) 
        newString = re.sub('[m]{2,}', 'mm', newString)
        if(num==0):
            tokens = [w for w in newString.split() if not w in stop_words]
        else:
            tokens=newString.split()
        long_words=[]
        for i in tokens:
            if len(i)>1:                                                 #removing short word
                long_words.append(i)   
        return (" ".join(long_words)).strip()



    def remove_noise(tweet_tokens, stop_words = ()):
        cleaned_tokens = []
        for token, tag in pos_tag(tweet_tokens):
            token = re.sub('http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+#]|[!*\(\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+','', token)
            token = re.sub("(@[A-Za-z0-9_]+)","", token)
            if token in Abbr_dict.keys():
                token = Abbr_dict[token]
            if tag.startswith("NN"):
                pos = 'n'
            elif tag.startswith('VB'):
                pos = 'v'
            else:
                pos = 'a'
            lemmatizer = WordNetLemmatizer()
            token = lemmatizer.lemmatize(token, pos)
            if len(token) > 0 and token not in string.punctuation and token.lower() not in stop_words:
                cleaned_tokens.append(token.lower())
        return cleaned_tokens

    def pred_sentiment(sum_text):
        sum_text = remove_noise(word_tokenize(sum_text))
        sentiment = classifier.classify(dict([tok, True] for tok in sum_text))
        return(sentiment)

    def clean_data():
        #dropping duplicates and na values
        data.drop_duplicates(subset=['Text'],inplace=True)
        data.dropna(axis=0,subset=['Text'], inplace=True)

        #call text_cleaner function to preprocess both review and summary for training
        cleaned_text = []
        for t in data['Text']:
            cleaned_text.append(text_cleaner(t,0)) 

        data['cleaned_text']=cleaned_text

        data.replace('', np.nan, inplace=True)
        data.dropna(axis=0,inplace=True)

        #selecting reviews with length equal to or less than max_len
        cleaned_text =np.array(data['cleaned_text'])
        product_id = np.array(data['ProductId'])
        score_values = np.array(data['Score'])

        short_text=[]
        pids = []
        scores = []

        for i in range(len(cleaned_text)):
            if len(cleaned_text[i].split())<=max_text_len :
                short_text.append(cleaned_text[i])
                pids.append(product_id[i])
                scores.append(score_values[i])
        return pd.DataFrame({'text':short_text, 'ProductId':pids, 'Score':scores})

    def get_result(pid):
        res_df = pd.DataFrame(columns=['pid', 'title', 'summaries', 'avg_rating', 'sentiment', 'price', 'image'])

        my_df = clean_data()
        print("Data cleaning done")
        print(meta_data)
        j = 0

        row = [pid, ]
        row += [meta_data.loc[meta_data['asin'] == pid]['title'].values[0],]
        df = my_df.loc[my_df['ProductId'] == pid]
        sums = []
        sents = []
        print("Generate sentiment")
        for i in range(len(df)):
            if pred_sentiment(df.iloc[i].text) == 'Positive':
                sents += [1, ]
            else :
                sents += [0, ]
        sums = [summary_data.loc[summary_data['pid'] == pid]['summaries'].values[0],]
        row += sums
        row += [df['Score'].sum()/len(df),]
        if sents.count(1) > sents.count(0):
            row += [1,]
        else:
            row += [0,]
        row += [meta_data.loc[meta_data['asin'] == pid]['price'].values[0],]
        row += [meta_data.loc[meta_data['asin'] == pid]['image'].values[0],]
        res_df = res_df.append({'pid':row[0], 'title':row[1], 'summaries':row[2], 'avg_rating':row[3], 'sentiment':row[4], 'price':row[5], 'image':row[6]},ignore_index=True)
        j += 1
        return res_df

    final_result = get_result(product_id).to_json()
    print(final_result)
    return final_result
