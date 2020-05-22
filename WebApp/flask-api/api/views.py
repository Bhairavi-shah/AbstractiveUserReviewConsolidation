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

nltk.download('punkt')
nltk.download('wordnet')
nltk.download('stopwords')
nltk.download('twitter_samples')
nltk.download('averaged_perceptron_tagger')
Abbr_dict = pd.read_json(basePath +"/abbreviations.json", lines = True)
Abbr_dict = list(Abbr_dict)
main = Blueprint('main', __name__)

@main.route('/preprocess', methods=['POST'])
def preprocess():
    product = request.get_json()
    print("from request: ", product)
    if product and "product_id" in product:
        product_id = product["product_id"]
    else:
        product_id = None
    
    
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

    basePath =os.path.dirname(os.path.abspath(__file__))
    df = pd.read_json(basePath +"/AMAZON_FASHION_5.json", lines = True)
    df.groupby('asin').mean()
    df_test = (df.loc[df['asin'] == product_id])
    print(df_test.columns)
    
    pickle_in = open(basePath + "/nb_sentiment_analysis_final.pkl","rb")
    classifier = pickle.load(pickle_in)
    df_test['PreprocessedText'] = df_test.reviewText.apply(lambda x: remove_noise(word_tokenize(str(x))))
    df_test['Sentiment'] = df_test.PreprocessedText.apply(lambda x: classifier.classify(dict([tok, True] for tok in x)))
    print(df_test[['PreprocessedText', "Sentiment"]])
    preprocessedData = df_test[['PreprocessedText', "Sentiment"]].to_json()
    return preprocessedData