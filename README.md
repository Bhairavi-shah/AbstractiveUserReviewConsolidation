---
abstract: |
    E-commerce websites such as Amazon allow customers to leave reviews for
    various products. There are usually hundreds of reviews for a single
    product, each review could be lengthy and repetitive. A customer would
    find it difficult to make a well-informed decision after reading all the
    reviews. Therefore, automatic review summarization has a huge potential
    to help customers by providing an authentic summary of the reviews found
    online on the E-commerce sites. We propose the method of abstractive
    summarization, which provides more accurate summaries and are closer to
    human generated summaries. The system also provides the general
    sentiment of the summaries generated which will help the customers make
    a decision quickly. The sentiment of the summaries would help the
    customers know the tone of the text.
---

**Abstractive User Review Consolidation**\
**CS492 Project\
**

**CSU16120 MDL16CS043** **Bhairavi Sameer Shah**\
**CSU16123 MDL16CS046** **Diya Liza Varghese**\
**CSU16138 MDL16CS074** **Michelle Elizabeth**\
**CSU16159 MDL16CS117** **Theres Mary Jose**

**B. Tech Computer Science & Engineering**

**Department of Computer Engineering\
Model Engineering College\
Thrikkakara, Kochi 682021\
Phone: +91.484.2575370\
http://www.mec.ac.in\
hodcs\@mec.ac.in\
**

**Model Engineering College Thrikkakara**\
**Department of Computer Engineering**\

**C E R T I F I C A T E**\

This is to certify that, this report titled ***Abstractive User Review
Consolidation*** is a bonafide record of the work done by\

**CSU16120 MDL16CS043** **Bhairavi Sameer Shah**

\

**CSU16123 MDL16CS046** **Diya Liza Varghese**

\

**CSU16138 MDL16CS074** **Michelle Elizabeth**

\

**CSU16159 MDL16CS117** **Theres Mary Jose**

\

[Eighth Semester B. Tech. Computer Science & Engineering]{.sans-serif}

\
students, for the course work in **CS492 Project**, which is the second
part of the two semester project work, under our guidance and
supervision, in partial fulfillment of the requirements for the award of
the degree, B. Tech. Computer Science & Engineering of **A. P. J. Abdul
Kalam Technological University**.

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx̄xxxxxxxxxxxxxxxxx̄

Guide\
\
\
Aysha Fymin Majeed\
Assistant Professor\
Computer Engineering

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx̄xxxxxxxxxxxxxxxxx̄

Coordinator Head of the Department\
\
\
Manilal D L Manilal D L\
Associate Professor Associate Professor\
Computer Engineering Computer Engineering

xxxxxxxxxxxxxxxxxxxxxxxxxxxxx̄xxxxxxxxxxxxxxxxx̄\
\

**Acknowledgements**\

This project would not have been possible without the kind support and
help of many individuals. We would like to extend our sincere gratitude
to all of them.

First of all, we would like to thank our esteemed Principal, Prof. (Dr.)
Vinu Thomas, for his guidance and support in maintaining a calm and
refreshing environment to work in and also for providing the facilities
that this work demanded.

We are highly indebted to our Project Coordinator and Head of the
Department, Manilal D L, Associate Professor for his guidance, support
and constant supervision throughout the duration of the work and for
providing all the necessary information and facilities required.

We would like to thank our Project Guide, Aysha Fymin Majeed for her
support and valuable insights and also for helping us out in correcting
any mistakes that were made during the course of this work.

We offer our sincere gratitude to all our friends and peers for their
support and encouragement that helped us get through the tough phases
during the course of this work.

Last but not the least, we thank the Almighty God for guiding us through
and enabling us to complete the work within the specified time.

`Bhairavi Sameer Shah`\
`Diya Liza Varghese`\
`Michelle Elizabeth`\
`Theres Mary Jose`

Introduction
============

Proposed Project
----------------

### Problem Statement

The existing systems for summarization do not consider the sentiment of
the user reviews which are necessary to produce sound reviews of
products. Also, some methods consider only a single document for
summarization while others do not consider repetition of semantically
equivalent words. To overcome these issues, we introduce the system
Abstractive User Review Consolidation.

### Proposed Solution

We propose a Sequence to Sequence (Seq2Seq) model with Attention
Mechanism which consists of an encoder, decoder, and attention layer to
perform abstractive summarization of user reviews. The dataset includes
user reviews of products from E-commerce websites. The tweets from
social networking platforms like Twitter which are sentimentally rich
are used to train a Naive Bayes model to identify the sentiment of the
review text. We use lemmatization to avoid repetition of semantically
equivalent words.

System Study Report
===================

Literature Survey
-----------------

1.  A Multi-View Abstractive Summarization Model Jointly Considering
    Semantics and Sentiment

    Short text summarization generates a short summary consisting of
    only a few sentences which captures the main idea of the original
    article. Usually, summaries are produced considering only the
    semantic meaning of the text. This paper jointly considers semantics
    and sentiment and proposes a model that uses encoder-decoder
    recurrent neural networks for semantic view and Sentiment
    Embedding(SE) and Sentiment Memory(SM) for sentiment view.The
    proposed multi-view model, contains a basic summary component which
    performs sentence compression using encoder-decoder and a sentiment
    component which uses SE to extract and represent the sentiment
    features automatically, and SM to capture the sentiment dynamics
    during the process. The encoder reads the input sentences
    dynamically as a sequence of vectors into a context vector. The
    decoder predicts the next word based on the context vector and the
    previously predicted words and uses Attention Mechanism for better
    performance. Bi-LSTM model was used as sentiment classifier and
    ROUGE was used as the evaluation metric.\

2.  Generating Abstractive Summaries Using Sequence to Sequence
    Attention Model

    Automatic text summarization using abstractive methods is
    significant in the field of information retrieval. Abstractive
    methods are effective as they closely resemble the summarization
    techniques adopted by humans. This paper applies Deep Neural Network
    model, namely Sequence to Sequence model to summarise research
    articles by considering the introduction and conclusion sections.
    Temporal attention mechanism is used to subdue the occurrence of
    repetitive words or sentences in summaries. The temporal attention
    model keeps record of the prior attentional weights produced by the
    decoder and restrains the decoder to attend the same chunks of the
    documents in the subsequent time stamps. ROUGE has been used as the
    evaluation metric for comparing sequence to sequence model with
    global attention and temporal attention.\

3.  Abstractive Multi-Document Summarization

    According to this paper, summarization can be done by 3 methods:
    compressive summarization, extractive summarization and abstractive
    summarization. Abstractive summarization is the best method among
    these, as new sentences can be created and repetition can be
    avoided. There are two approaches for performing abstractive
    summarization of multiple documents. First is phrase selection and
    merging which uses linear optimization method to obtain an optimal
    solution for a summary. It uses the noun phrase (NP) or verb phrase
    (VP) to separate the sentences into phrases. Salience Score is
    provided to each phrase and a new sentence is generated based on the
    maximum salience score (Summary Content Unit). The second method is
    the Semantic Information Extraction Approach which uses BSU basic
    semantic network which depicts semantic information. This network is
    analysed to create the summary. BSU is extracted, a semantic link
    network is created, reduced and thus, the sentence is generated. The
    clustered semantic graphs use semantic role labelling and ranking
    algorithms.\

4.  Extracting Aspects and Mining Opinions in Product Reviews Using
    Supervised Learning Algorithm

    Semantic analysis and opinion mining aim to automatically extract
    opinions expressed in the user-generated content. Opinion mining
    tools allow businesses to understand new product opinion, product
    sentiments, brand view and reputation management. There are three
    general categorizations for opinion mining tasks: document-level,
    sentence-level, and phrase-level. Aspect level opinon mining
    extracts aspect opinions from documents. The projected system
    identifies the number of positive and negative opinions of each
    aspect in online reviews. The system preprocesses data and performs
    sentence and aspect extraction. Stop word removal, stemming and POS
    tagging are the processes in data preprocessing. Naive Bayesian
    algorithm is used to identify opinions.\

5.  An Abstractive Summarizer Based on Improved Pointer-Generator
    Network

    The deep learning model has been widely applied in natural language
    processing and has achieved improved results. This paper introduces
    the decoder attention mechanism in the pointer-generator network to
    improve the accuracy and fluency of the summary. The multi-hop
    attention mechanism is introduced to improve the copy probability
    distribution. The pointer-generator network is an improvement of the
    sequence-to-sequence attention model which includes the encoder,
    decoder and attention mechanism. The coverage vector, used as a new
    input to compute the attention mechanism, tells the model which
    words it has focused on before so that fragment duplication is
    avoided. Using attention mechanism at the decoder ensures that
    generating ability has improved since both the original text and the
    partial summary are considered at every time-step. It follows the
    process of constantly observing the original text and the generated
    summary when people do information extraction, and improve the copy
    probability based on the baseline pointer-generator network model.
    ROUGE metric was used to evaluate the performance of the system.\

6.  Dual Encoding for Abstractive Text Summarization

    Recurrent neural network-based sequence-to-sequence attention models
    have proven effective in abstractive text summarization. In this
    paper, we model abstractive text summarization using a dual encoding
    model. The proposed dual encoding model consists of a primary
    encoder, a secondary encoder, and a decoder. It conducts the primary
    encoder and decoder as the standard attentional encoder--decoder
    model. The secondary encoder is based on the input and the
    previously produced output, and generates a new context vector as an
    additional input of the decoder. The primary encoder calculates the
    semantic vectors for each word in the input sequence. The secondary
    encoder first calculates the importance weight for each word in the
    input sequence and then recalculates the corresponding semantic
    vectors. The decoder with attention mechanism decodes by stages and
    generates a partial fixed-length output sequence at each stage. The
    context vector makes the decoder obtain more meaningful information
    and generate better output. A pointer mechanism is used to handle
    OOV words and a coverage mechanism to address the problem of
    repetition. Besides, an additional multistep decoding operation in
    the decoder models the decoded content at each stage as a semantic
    feature vector helping avoid the problem of repetition. The model
    was evaluated using ROUGE-1, ROUGE-2 and ROUGE-L for unigram, bigram
    and long text respectively.\

7.  Multi-Document Abstractive Summarization Based on Predicate Argument
    Structure

    The summary is generated based on the predicate argument structure
    of the sentences. To obtain the predicate argument structure we use
    semantic role labelling. In the first step, we extract the predicate
    argument structure to represent text semantically. The second step
    includes grouping semantically similar predicate argument structure
    using hybrid approach of K-means (selected because of its better
    run-time) and agglomerative hierarchical clustering (selected
    because of its quality) by utilizing semantic similarity measures.
    Features are extracted from this, and finally the top ranked
    predicate argument structures are selected for summary. The
    sentences are formed using language generation techniques.\

8.  Evaluation of Automatic Text Summarizations Based on Human Summaries

    Two sets of summaries of the same data were obtained, one by
    automatic text summarization and the other by manually producing
    summaries. Automatic summaries were obtained by using fuzzy method
    and vector approach. The ROUGE calculation clearly indicated that
    human summaries were much more accurate than automatically generated
    summaries. Though, summaries produced by fuzzy method were much more
    acceptable and understandable compared to the ones produced by
    vector approach.\

9.  Clustered Genetic Semantic Graph Approach for Multi-Document
    Abstractive Summarization

    This paper uses a clustered genetic semantic graph approach for
    multi-document abstractive summarization. The semantic graph is
    constructed by ensuring the graph vertices represent the predicate
    argument structures (PASs), extracted automatically by employing
    semantic role labelling (SRL) and the edges of graph correspond to
    semantic similarity weight determined from PAS-to-PAS semantic
    similarity, and PAS-to-document relationship. The PAS-to-document
    relationship is expressed by different features, weighted and
    optimized by genetic algorithm. The salient graph nodes (PASs) are
    ranked based on modified weighted graph based ranking algorithm. The
    clustering algorithm is performed to eliminate redundancy in such a
    way that representative PAS with the highest salience score from
    each cluster is chosen, and fed to language generation to generate
    summary sentences.\

10. Integrating Extractive and Abstractive Models for Long Text
    Summarization

    In this paper, a two-phase approach towards long text summarization
    is employed, namely, EA-LTS. In the extraction phase, it conceives a
    hybrid sentence similarity measure by combining sentence vector and
    Levenshtein distance, and integrates it into graph model to extract
    key sentences. In the abstraction phase, it constructs a recurrent
    neural network based encoder-decoder, and devises pointer and
    attention mechanisms to generate summaries. A real-life long text
    corpora, collected from sina.com is used for testing.\

11. Multi Document Abstractive Summarization Using ILP Based Multi
    Sentence Compression

    This approach finds the most important documents from multiple
    documents. It is done using LexRank. Sentences are aligned to
    generate clusters of similar sentences. The most relevant and
    linguistically well formed sentences are selected from the cluster
    of sentences formed. Then, it generates K-shortest paths from the
    sentences in each cluster using word-graph. Finally, sentences from
    the shortest paths generated from all clusters are selected using
    Integer Linear Programming (ILP). After selecting sentences from the
    cluster, the summary sentences are generated. Constraints were
    imposed on the number of sentences selected from each cluster to
    avoid redundancies. The ROUGE evaluation is done to ensure the
    quality. It also undergoes manual evaluation.\

12. A Neural Attention Model for Abstractive Sentence Summarization

    In this work, a fully data-driven approach to abstractive sentence
    summarization is used. This method uses a local attention-based
    model that generates each word of the summary conditioned on the
    input sentence. The network contains both neural language model and
    an encoder. The language model estimates the probability of the next
    word. It is adapted from a standard feed-forward neural network
    model. The attention model is combined with a generative algorithm
    to produce accurate abstractive summaries. Since this system makes
    no assumptions about the vocabulary of generated summary, it can be
    directly trained on any document-summary pair.\

13. Multi-Document Abstractive Summarization Using Chunk-Graph &
    Recurrent Neural Network

    In this method, several sentences in the document set are grouped
    into clusters manually or by clustering algorithms. Sentences in the
    same clusters are compressed to one sentence using chunk-graph (CG).
    To construct CG, the chunks are labelled in each sentence in a
    cluster. The chunk units are taken as nodes & relations among them
    as edges. After constructing CG, the nodes which refer to the same
    entities are merged to one node. Beam search & RNNLM is applied to
    find the best path in CG as the summary of a cluster. In the end,
    all the summaries generated from the CGs are ranked and these scores
    decide the order of each sentence in the final summary.\

14. Sequence Generative Adversarial Network for Long Text Summarization

    A new adversarial training framework is used for text summarization
    task. This framework consists of two models: A generator that
    generates summaries and a discriminator that evaluates the generated
    summaries. The co-training of generator and discriminator is
    guaranteed by reinforcement learning (RL) in which the discriminator
    improves its performance by learning from more and more training
    samples and the generator gets feedback from the discriminator and
    improves itself. For effective summarization of long text, the
    attention mechanism is introduced in the generator, on both encoder
    and decoder and a triple-RNN model is used in the discriminator.\

15. Multiple Text Document Summarization System Using Hybrid
    Summarization Technique

    This paper presents a novel approach to generate abstractive summary
    from extractive summary using WordNet ontology. There are 2 main
    blocks in this model: extractive and abstractive. The sentences are
    extracted from documents and tokenization is performed. Repetitive
    sentences and words are removed. Now, the weight of the sentence is
    calculated and extractive summary is generated. Abstractive summary
    is the second phase of multiple document text summarization. By
    applying heuristic rules, important nodes from the extractive
    summary is found. Ontology represents the domain which talks about
    the same topic having same knowledge. It provides a vocabulary and a
    set of synset. Next, meaningful terms are produced by preprocessing
    and classifier classifies those terms. WordNet is a lexical database
    of English. It defines meanings and models. It consists of synsets,
    which provides different semantic relationships.\

16. Multi-Layered Sentimental Analytical Model for Product Review Mining

    The product review classification is the mechanism used to analyze
    the sentiment or opinion in the reviews posted by the users to
    prepare the product review. In this paper, the mechanism is to use
    opinion mining over text review data for the generation of product
    review report, which is based on multiple features. The product
    reviews undergo aspect based summarization after sentiment analysis.
    Stemming porter is used to convert non-root words into root words.
    There are 3 levels of sentiment analysis: document-level, sentence
    level, aspect and entity level. The system uses review analytical
    algorithm and automatic review classification algorithm.\

ls.csv slno;title;author;year;technique;advantages;disadvantages 1;A
Multi-view Abstractive Summarization Model Jointly Considering Semantics
and Sentiment;Moye Chen, Lei Li, Wei Liu;2018;Encoder-Decoder Recurrent
Neural Network;Multi-view model extracts sentiment features
automatically. Low dimension vector for SE proved to be a powerful
representation since sentiment categories are not complex.This model was
proven to be an improvement to existing baseline systems;Sentiment
labeling should be done manually since there is no dataset with labeled
sentiment. More attention should be given to intra-relationship of
words. Sentiment factor was not considered while computing loss
function. 2;Generating Abstractive Summaries Using Sequence to Sequence
Attention Model;Tooba Siddiqui, Jawwad Ahmed Shamsi;2018;Sequence to
Sequence Attention Model;The rouge score of the temporal attention model
is higher as compared to the rouge score of the global attention
model.;Computational cost for summarisation increases with documents,
layers and iterations. 3;Abstractive Multi-document
Summarization;Ranjitha N S, Dr. Jagadish S Kallimani;2017;Linear
Optimization Method, Semantic Information Text Approach;Repetition
avoided using agglomerative hierarchical clustering. This approach is
applicable with respect to any domain and requires no interventions of
human experts. Provides PAS representation with high salience value.;It
fails for words with opinions. 4;Extracting Aspects and Mining Opinions
in Product Reviews Using Supervised Learning Algorithm;A.Jeyapriya, C.S.
Kanimozhi Selvi;2015;Sentiment Analysis/Aspect Based Opinion
Mining;Positive and negative opinions are separated from the documents.
Sentiment orientation algorithm is used to find the probability of
positive and negative opinions. Good accuracy.;New sentences are not
created. 5;An Abstractive Summarizer Based on Improved Pointer-Generator
Network;Wenbo Nie, Wei Zhang, Xinle Li, Yao Yu;2019;Pointer-Generator
Model, Attention Mechanism;It has a higher Rouge score than the basic
pointer-generator model. It can handle out-of-vocabulary(OOV)
words.;Repetition is not fully eliminated. 6;Dual Encoding for
Abstractive Text Summarization;Kaichun Yao, Libo Zhang, Dawei Du,
Tiejian Luo, Lili Tao, Yanjun Wu;2018;Dual Encoding Model;Uses an
enhanced repetition avoid mechanism which improves the quality of the
generated summary. The secondary encoding is more likely to fulfil a
fine and selective encoding to help decoder produce better summary. More
suitable for long sequence generation tasks.;A large decoding length
makes the secondary encoder out of function. A small decoding length is
not able to capture enough information and increases computational cost
due to more secondary encoding operation. 7;Multi-document Abstractive
Summarization Based on Predicate Argument Structure;Alshaina S, Ansamma
John, Aneesh G Nath;2017;Predicate Argument Structure;Better computation
time than existing systems. Abstractive text summarization produces
highly meaningful, knowledge rich and less redundant summary. Provide a
viable solution than other algorithms.;Feature selection is made
randomly. 8;Evaluation of Automatic Text Summarization Based on Human
Summaries;Farshad Kiyoumarsi;2014;Fuzzy Method, Vector Approach;Quality
of summaries produced by humans and by using automatic summarization was
comparable. Automatic more efficient when volume of data increases. Most
of the time, readers are able to understand the summaries using their
common sense and make the summaries coherent in their
mind.;Automatically generated summaries are not coherent and intelligent
as human summaries, since humans can think and decide on the best
option. 9;Clustered Genetic Semantic Graph Approach for Multi-document
Abstractive Summarization;Atif Khan, Naomie Salim, Haleem
Farman;2016;Clustered Genetic Semantic Graph Approach;The semantic
similarity measures assists in detecting redundancy by capturing
semantically equivalent predicate argument structures thereby improving
results. Does not require any intervention of human experts.;The
proposed approach assumes semantic structure of sentence. The impact of
Cross-Document Structural Theory (CST) relations for multi-document
abstractive summarization is not considered. 10;Integrating Extractive
and Abstractive Models for Long Text Summarization;Shuai Wang, Xiang
Zhao, Bo Li, Bin Ge, Daquan Tang;2017;Graph Model, Recurrent Neural
Network;Integration of the state-of-art models leverages the advantages
of both extractive and abstractive summarization methods, and achieves
significant performance improvements when dealing with long text. A real
world dataset from financial domain for long text summarization is
used.;Requires a large-scale structured training data. Not capable of
multi-document text summarization. 11;Multi Document Abstractive
Summarization using ILP Based Multi Sentence Compression;Siddhartha
Banerjee, Prasenjit Mitra, Kazunari Sugiyama;2015;Inter Linear
Programming Model(ILP);Achieves promising results on informativeness and
readability. Log probability score is assigned as an indicator of
linguistic quality. ILP is a novel methodology to be used.;Requires
manual evaluation 12;A Neural Attention Model for Abstractive Sentence
Summarization;Alexander M. Rush, Sumit Chopra, Jason Weston;2015;Neural
Network;Can easily scale to train on a large amount of data. Can be
trained directly on any document-summary pair.;Repeating semantic
elements. Altering semantic roles. Improper generalization.
13;Multi-Document Abstractive Summarization using Chunk-Graph and
Recurrent Neural Network;Jianwei Niu, Huan Chen, Qingjuan Zhao, Limin
Sun, Mohammed Atiquzzaman;2017;Chunk Graph and Recurrent Neural
Network;Using CG instead of words as basic unit greatly reduces the
graph size. Smaller graph size can reduce the computation load
effectively.;CG filters the sentence paths in low linguistic quality.
14;Sequence Generative Adversarial Network for Long Text
Summarization;Hao Xu, Yanan Cao, Ruipeng Jia, Yanbing Liu, Jianlong
Tan;2018;Generative Adversarial Network(GAN);Discriminator model
provides additional improvement in performance. It is more prominent in
effective summarization of long source text.;The generated summary still
contains repeating phrases. This model uses supervised learning, which
rely on high quality datasets which is scarce. 15;Multiple Text Document
Summarization System using Hybrid Summarization Technique;Harsha Dave,
Shree Jaswal;2015;Hybrid Technique, WordNet Ontology;The generated
abstractive summary is in well-compressed, grammatically correct and
human readable format.;As the size of the document increases, system
will take more time to generate summary. 16;Multi-Layered Sentimental
Analytical Model For Product Review Mining;Jagbir Kaur, Meenakshi
Bansal;2016;Sentiment Analysis/Opinion Mining;The proposed system has
very high accuracy(99 percent). It is efficient and accurate in terms of
assessed parameters.;Does not consider compression error.

  **Sl. No**   **Title**   **Author**   **Year**   **Technique**   **Advantages**   **Disadvantages**
  ------------ ----------- ------------ ---------- --------------- ---------------- -------------------
                                                                                    
                                                                                    

Proposed System
---------------

The existing systems for summarization do not consider the sentiment of
the user reviews which are necessary to produce genuine reviews of
products. Also, some methods consider only a single document for
summarization while others do not consider repetition of semantically
equivalent words. To overcome these issues, we introduce the system
Abstractive User Review Consolidation.\
\
We propose a Sequence to Sequence (Seq2Seq) model with Attention
Mechanism which consists of an encoder, decoder, and attention layer to
perform abstractive summarization of user reviews. The dataset includes
user reviews of products from e-commerce websites. The tweets from
social networking platforms like Twitter which are sentimentally rich
are used to train a Naive Bayes model to identify the sentiment of the
review text. We use lemmatization to avoid repetition of semantically
equivalent words. The automatic summary is generated out of the reviews
received from the e-commerce sites and the repetition of the words are
taken into account while creating the summary. The tweets are used to
train the model with the sentiment of words that are mostly used in the
online space. The proposed system gives a concise summary and sentiment
of the reviews and average-rating of the product selected by the user.

Software Requirement Specification
==================================

Introduction
------------

This section includes the purpose of Software Requirement Specification,
document conventions, intended audience and reading suggestions, project
scope and overview of developers responsibilities.

### Purpose

This document is the software requirement specification for the project
titled ABSTRACTIVE USER REVIEW CONSOLIDATION - VERSION 1.0. The aim of
this project is to develop a system to summarize and generate reviews
about the products available on e-commerce platforms. This document
maintains all the functions and specifications of the system and
contains the detailed descriptions for the requirements specified.

### Document Conventions

-   NLP - Natural Language Processing

-   NLTK - Natural Language Tool Kit

-   API - Application Programming Interface

-   IDE - Integrated Development Environment

### Intended Audience and Reading Suggestions

The document is intended for stakeholders, developers, project managers,
testers and documentation writers. The rest of this SRS contains further
details of the project which includes the scope of the project as well
as software and hardware requirements.

### Project Scope

Automatic text summarization is the task of producing a concise and
fluent summary while preserving key information content and overall
meaning. With the rise in usage of e-commerce platforms, it is important
to provide a concise form of user reviews about the products available
online. The web application would also be useful for sellers of the
products, making it easier for them to go through customer feedback by
going through their products on the application.\
The project aims to create a web application, which can be used to
obtain consolidated form of customer reviews of various products
available on e-commerce websites. This will help buyers to go through
different products and their major pros and cons easily, without having
to spend hours reading through all the reviews available. The
application would also provide the general sentiment of other buyers,
obtained from the sentiment analysis of the reviews. This would provide
the buyer with the percentage of people satisfied and dissatisfied with
the product, which would further help in the decision to purchase the
product.\

### Overview of Developer's Responsibilities

The responsibilities of the developer include the following.

-   Develop and integrate an efficient algorithm by incorporating
    abstractive summarization using Seq2Seq Model with Attention
    Mechanism.

-   Reduce complexity of the text by making use of various preprocessing
    techniques such as lemmatization.

-   Improve the understanding of the review summary by identifying the
    general sentiment of the reviews; generated using a trained Naive
    Bayesian model.

-   Display the summarised review, average rating and the sentiment so
    as to improve readability.

-   Provide the end user with a clear and smooth interface.

-   Configure a fast and efficient server system.

Overall Description
-------------------

This section includes product perspective, product functions, user
classes and characteristics, operating environment, design and
implementation constraints, user documentation, general constraints and
assumptions and dependencies of the project.

### Product Perspective

The existing systems for summarization use extractive methods which
identify important sections of the text and generate them verbatim
producing a subset of the sentences from the original text. Also, they
do not consider the sentiment of the user reviews and some methods
consider only a single document for summarization. On the other hand,
the abstractive summarization method reproduces important material in a
new way after interpretation and examination of the text using advanced
natural language techniques to generate a new shorter text that conveys
the most critical information from the original one along with the
sentiment quotient of the generated summary.

![System
Overview[]{label="fig:system overview"}](images/SystemOverview.png){#fig:system overview}

### Product Functions

The product aims to implement the following functions:

-   Generate an abstractive summary of the available reviews of the
    selected product using a trained deep learning model.

-   Determine the general sentiment of the users for the selected
    product.

-   Compute the average rating of the selected product.

-   Display product data including the name, image and price.

### User Classes and Characteristics 

#### End Users

-   **Online Shoppers**\
    The application is intended to be used by online shoppers who
    directly buy goods over the internet. They simply need to have
    access to the internet and a basic knowledge on using web pages.
    Increased exposure to technology increases the probability of
    shopping online and thus using this application.

-   **Manufacturers**\
    This application can also be used by product manufacturers in order
    to receive the customers opinions and feedback on their product in
    brief. They may use this data to improve their strategies and to
    produce better products which satisfies the customers' needs.

### Operating Environment

A hardware device like a smartphone, tablet, laptop or desktop with good
internet connectivity is required. The user will interact with the
system via a web application. The device used to access the system must
run on Linux or Windows Operating System.

### Design and Implementation Constraints

-   The server must run without a time constraint.

-   Increase in number of reviews affects the computational cost for
    summarization.

-   There may be problems with out-of-vocabulary(OOV) words.

-   The language used in the reviews must be English.

### User Documentation

The system has a simple GUI, so there is no need for additional user
documentation. Basic understanding of computers and the internet is
sufficient for using this system.

### General Constraints

-   Training of the seq2seq model requires a lot of time depending on
    the amount of data used.

-   CPU requirements are relatively high and increases with the amount
    of training data.

-   Training a huge amount of data is infeasible.

-   A stable internet connection is required to use the web application.

### Assumptions and Dependencies

-   The interface of the system will be easy to use and accessible
    without any time or location constraints.

-   The user must have an updated web browser.

-   The application assumes a stable network connection.

-   The text parsed by the application is assumed to be in English.

External Interface Requirements
-------------------------------

This section describes the user interfaces, hardware interfaces,
software interfaces and communication interfaces.

### User Interfaces

The user will interact with the system via a web application. The
product name will be selected from an auto-complete drop-down list
provided in the homepage. A 'Submit' button will process the input. The
output will be displayed as a sweet alert box containing the name,
image, price, summary of the reviews, sentiment of the reviews and
rating of the product.

### Hardware Interfaces

A hardware device like a smartphone, tablet, laptop or desktop with good
internet connectivity is required to access the proposed system through
a web browser. No specialised hardware is required.

### Software Interfaces

The web application is programmed in Python with Flask as the framework
for the application. React is used as the front end library along with
Javascript. Libraries like Keras and Tensorflow would be used for
machine learning and deep learning applications i.e., for training and
testing various models. Pandas library would be used to manipulate the
data for all computations along with the NLTK library for countless
natural language processing of the review text.

### Communication Interfaces

The system can be accessed via any popular web browsers like Chrome,
Firefox etc. The communication between the application and the
web-server will be done using HTTP. The application will send a HTTP
request to the web-server. The HTTP POST method will be used to return
the response. The web-server returns a HTTP response containing JSON
data related to the request.

Hardware and Software Requirements
----------------------------------

This section includes the hardware and software requirements of the
proposed system.

### Hardware Requirements

-   System: **CPU - 2.4GHz**\
    Model training and generating abstractive summary consumes a lot of
    system resources. Therefore a server with Clock speed of at least
    2.4GHz is required.\

-   RAM: **10GB** (Minimum)\
    The system deals with a large amount of memory requirements in order
    to train the model. Hence a RAM of at least 10GB is required.\

-   Hard Disk: **50GB** (or higher)\
    The system deals with a large amount of data. Hence it requires a
    hard disk of 50GB.

### Software Requirements

-   Operating System: Any operating system (preferably Linux (64-bit),
    Windows)\
    Linux, Windows is preferred because these are developer friendly,
    has a powerful shell, flexible and is the most popular\

-   Language: **Python 3.6.2, JavaScript**\
    **Python**\
    Python is an interpreted, high-level, general-purpose programming
    language. It takes very less time to develop. It is typically 3-5
    times shorter than other equivalent programming languages. It has
    powerful polymorphic list and dictionary types, for which rich
    syntactic support is built straight into the language.\
    **JavaScript**\
    JavaScript, often abbreviated as JS, is a high-level programming
    language, often just-in-time compiled, and multi-paradigm. It has
    curly-bracket syntax, dynamic typing, prototype-based
    object-orientation, and first-class functions. JavaScript is the
    programming language of HTML and the Web.

-   Frameworks: **Flask**\
    Flask is a python framework used for building the Web interface.
    Flask is much more fully featured than other frameworks. Python
    Flask framework supports the use of human-readable website URLs. It
    also has its own bootstrapping tool. Flask separates a project into
    individual applications, where Pyramid and Django expect a project
    to be a single "application" with several views or models.\

-   IDE: **Google Colaboratory, Visual Studio Code**\
    **Google Colaboratory** : Google Colaboratory is a free cloud
    service by Google and supports free GPU. It provides us with a cloud
    environment consisting of n1-highmem-2 instance machine type, 2
    virtual CPU at 2.2GHz, 13GB RAM and 64GB Free Space. It has an idle
    cut-off 90 minutes and can be used to run code for free maximum for
    12 hours.\
    **Visual Studio Code** : Visual Studio Code is a source-code editor
    developed by Microsoft for Windows, Linux and macOS. It includes
    support for debugging, embedded Git control, syntax highlighting,
    intelligent code completion, snippets, and code refactoring.\

-   Libraries: **Tensorflow, Keras, NLTK, React**\
    **Keras**\
    Keras is an open-source neural-network library written in Python. It
    is capable of running on top of TensorFlow, Microsoft Cognitive
    Toolkit, R, Theano, or PlaidML. Designed to enable fast
    experimentation with deep neural networks, it focuses on being
    user-friendly, modular, and extensible. Keras has strong multi-GPU &
    distributed training support.\
    **TensorFlow**\
    TensorFlow is a free and open-source artificial intelligence
    software library for dataflow and differentiable programming across
    a range of tasks. It is a symbolic math library, used for machine
    learning applications such as to create large-scale neural networks
    with many layers. It uses data flow graphs to build models.
    TensorFlow is helpful for Classification, Perception, Understanding,
    Discovering, Prediction and Creation.\
    **NLTK**\
    NLTK provides a suite of text processing libraries for
    classification, tokenization, stemming, tagging, parsing, and
    semantic reasoning like nltk.sent-tokenization,
    nltk.word-tokenization, nltk.stopwords etc. When compared to other
    libraries like spacy, gensim and scikit-learn, NLTK has many
    advantages such as fast tokenization, plenty of approaches for each
    nlp task, and support for a large number of languages.\
    **React**\
    React is an open-source Javascript library that is used to build
    user interfaces. It helps build encapsulated components that manage
    their own state, then compose them to make complex UIs. React
    abstracts away the DOM from you, offering a simpler programming
    model and better performance.\

Functional Requirements
-----------------------

This section briefly describes the functional requirements of the
system.

### Input Product Name

![Usecase Diagram - Input Product
Name[]{label="fig:usecase1"}](images/input_usecase.png){#fig:usecase1}

-   The user inputs the product name via the auto-complete drop-down
    list provided in the web application.

-   The input product name is mapped to its product ID.

-   The product ID is then retrieved as partial output of this stage.

### Search for Reviews

![Usecase Diagram - Search
Reviews[]{label="fig:usecase2"}](images/search_usecase.png){#fig:usecase2}

-   The product ID is given as input to this stage.

-   The Amazon product database is searched using this product ID to
    retrieve relevant reviews of the product.

-   The review data from the database is then given for preprocessing.

### Preprocessing

![Usecase Diagram -
Preprocessing[]{label="fig:usecase3"}](images/preprocessing_usecase.png){#fig:usecase3}

-   The collected review data is given as input to this stage.

-   The data undergoes tokenization, lemmatization, resolution of
    abbreviations, POS tagging and removal of stop words.

-   Preprocessed data is obtained as output for this stage.

### Sentiment Analysis

![Usecase Diagram - Sentiment
Analysis[]{label="fig:usecase4"}](images/sentiment_usecase.png){#fig:usecase4}

-   The preprocessed data is fed into the trained Naive Bayes machine
    learning model for sentiment analysis.

-   The sentiment of the preprocessed data is generated, which is given
    to the web application.\

### Summary Generation

![Usecase Diagram - Summary
Generation[]{label="fig:usecase5"}](images/summary_usecase.png){#fig:usecase5}

-   Preprocessed data is fed into the trained machine learning model for
    generating summary.

-   A summary is generated by the model, which is then given to the web
    application.

### Display Output

![Usecase Diagram - Display
Output[]{label="fig:usecase6"}](images/output_usecase.png){#fig:usecase6}

-   The summary and the sentiment found from the trained model along
    with the basic information of the product is sent back to the web
    application.

-   The details are displayed in the user interface components.

Non-functional Requirements
---------------------------

This section describes performance requirements, safety requirements,
security requirements and software quality attributes.

### Performance Requirements

The time required to generate the output of the search should be
minimum. The literal quality of the summary generated must be high. The
summary generated must consider all aspects of the reviews, providing
required weightages to important parts.

### Security Requirements

The data given by the user is passed onto a secure server. HTTPS is used
to establish the communication protocol. Data mining should not cause
security breaches. So, precautions must be taken beforehand in terms of
access and permissions.

### Software Quality Attributes

-   **Reliability**: The website can be used by multiple users
    concurrently. Any user can access the website.

-   **Availability**: The system will be available 24 hours a day.

-   **Maintainability**: The system is implemented as modules thus
    enhancing its maintainability.

-   **Portability**: User can use the website at any time, anywhere as
    long as there is a stable internet connection.

Other Requirements
------------------

Besides the functional and non-functional requirements, there are also
other requirements like ease of use and error tolerance. Ease of use
describes the ease with which users can interact with the system and
error tolerance says about the extent to which error is tolerated if it
occurs in the system.

### Ease of Use

-   The system will be easy to handle with minimum delay.

-   The system provides an easy and friendly web user interface.

### Error Tolerance

-   The system should have minimum accuracy level maintained in summary
    generation.

-   It should be free from processing delays.

System Design
=============

System Architecture
-------------------

\
The system is divided into 6 phases:\

-   **Phase 1** - Training the machine learning models\

-   **Phase 2** - Input data\

-   **Phase 3** - Data collection\

-   **Phase 4** - Data preprocessing\

-   **Phase 5** - Summary generation and sentiment analysis\

-   **Phase 6** - Output display\

![System
Architecture[]{label="fig:sysarch"}](images/system_architecture.png){#fig:sysarch}

### Training the models

There are 2 machine learning models used in the system. One, to produce
the summary of reviews and the other, to identify the sentiment of the
reviews. A data set containing nearly 6,00,000 reviews of Amazon
products and their summaries are fed into a Seq2Seq model with attention
mechanism that includes an encoder, a decoder and an attention layer.
The data set is used to train the model to produce summary of each
review. This trained model is tested with a testing dataset of reviews
to check its performance. The model is then stored for use to summarize
the required reviews.\
The Twitter sentiment analysis dataset, which contains tweets and their
associated sentiment is used to train a Naive Bayes model to correctly
identify the sentiment of any given sentence. The model is tested with
sample sentences to check its accuracy.\

### Input Data

In an information system, the input is raw data that is processed to
produce the output. The end user inputs the name of the product whose
review summary is to be generated. The input is given via an
auto-complete drop-down. The name of the product is mapped to its
product ID and the same is sent to the next module.

### Data Collection

Data is extracted from the Amazon product database using the product ID.
The reviews about the selected product is collected and sent into the
next phase which is the preprocessing stage.

### Data Preprocessing

Preprocessing is done to obtain a more digestible form so that the
machine learning algorithms can perform better. This phase includes
tokenization, stop words elimination, lemmatization, POS tagging and
resolution of abbreviations. This cleans up the data and converts it
into an integer sequence which the model understands.

### Summary Generation and Sentiment Analysis

Preprocessed data is fed into the trained seq2seq model for summary
generation. A summary is generated by the model, which is then given to
the web application. The summary generated is an abstractive summary,
which generates new phrases and sentences that represent the most
important information from the source text. The most relevant summaries
are selected to be sent to the web application.\
Preprocessed data is also sent to the sentiment analysis model. The
percentage of positive and negative sentiment acquired from all the
preprocessed reviews is generated and sent to the web application.

### Output Display

The generated summary and the sentiment is sent to the web application.
The details are presented to the user through a sweet alert. It contains
the name, image, price, summary, rating and sentiment of the selected
product.

Data Description
----------------

### Database design

![Database Design[]{label="fig:fig"}](DatabaseDesign.png){#fig:fig}

### Use Case Diagram

#### Input Data

![Usecase Diagram - Input
Data[]{label="fig:usecase1"}](images/input_usecase.png){#fig:usecase1}

#### Search Reviews

![Usecase Diagram - Search
Reviews[]{label="fig:usecase2"}](images/search_usecase.png){#fig:usecase2}

#### Preprocessing

![Usecase Diagram -
Preprocessing[]{label="fig:usecase3"}](images/preprocessing_usecase.png){#fig:usecase3}

#### Sentiment Analysis

![Usecase Diagram - Sentiment
Analysis[]{label="fig:usecase4"}](images/sentiment_usecase.png){#fig:usecase4}

#### Summary Generation

![Usecase Diagram - Summary
Generation[]{label="fig:usecase5"}](images/summary_usecase.png){#fig:usecase5}

#### Output Display

![Usecase Diagram - Output
Display[]{label="fig:usecase6"}](images/output_usecase.png){#fig:usecase6}

### Class diagram

![Class
Diagram[]{label="fig:classdiagram"}](ClassDiagram.png){#fig:classdiagram}

### Activity Diagram

![Activity
Diagram[]{label="fig:activitydiagram"}](images/ActDiagram.png){#fig:activitydiagram}

### Dataset Design

For training the summary generation machine learning model, we to use
the Amazon product data\[1\], an open source dataset composed of
millions of amazon reviews. This dataset contains product reviews and
metadata from Amazon, including 142.8 million reviews spanning the
period from May 1996 - July 2014. It includes reviews (ratings, text,
helpfulness votes), product metadata (descriptions, category
information, price, brand, and image features), and links to other
relevant data (also viewed/also bought graphs).\
Twitter is a well-known microblog service that allows public data to be
collected via APIs. For training the text sentiment prediction model we
make use of the NLTK's twitter corpus currently containing a sample of
20k tweets retrieved from the Twitter Streaming API.

Libraries and Packages Used
---------------------------

### Keras

Keras is an open-source neural-network library written in Python. It is
capable of running on top of TensorFlow, Microsoft Cognitive Toolkit, R,
Theano, or PlaidML. Designed to enable fast experimentation with deep
neural networks, it focuses on being user-friendly, modular, and
extensible. Keras has strong multi-GPU & distributed training support.

### TensorFlow

TensorFlow is a free and open-source artificial intelligence software
library for dataflow and differentiable programming across a range of
tasks. It is a symbolic math library, used for machine learning
applications such as to create large-scale neural networks with many
layers. It uses data flow graphs to build models. TensorFlow is helpful
for Classification, Perception, Understanding, Discovering, Prediction
and Creation.

### sklearn

Scikit-learn is a free machine learning library for Python. It features
various algorithms like support vector machine, random forests, and
k-neighbours. It also supports Python numerical and scientific libraries
like NumPy and SciPy. The sklearn library contains a lot of efficient
tools for machine learning and statistical modeling including
classification, regression, clustering and dimensionality reduction.

### json

Python has a built-in package called json, which can be used to work
with JSON data. json exposes an API familiar to users of the standard
library marshal and pickle modules. The package contains all the
functions that will help one use the JSON files and the allied
activities.

### BeautifulSoup

Beautiful Soup is a Python package for parsing HTML and XML documents.
It creates a parse tree for parsed pages that can be used to extract
data from HTML, which is useful for web scraping. It is available for
Python 2.7 and Python 3.

### pickle

Python pickle module is used for serializing and deserializing a Python
object structure. Any object in Python can be pickled so that it can be
saved on disk. What pickle does is that it "serializes" the object first
before writing it to file. Pickling is a way to convert a python object
(list, dict, etc.). The module is used to save trained models in
storable formats.

### pandas

In computer programming, pandas is a software library written for the
Python programming language for data manipulation and analysis. In
particular, it offers data structures and operations for manipulating
numerical tables and time series. It has intelligent data alignment and
integrated handling of missing data.

### numpy

NumPy is a library for the Python programming language, adding support
for large, multi-dimensional arrays and matrices, along with a large
collection of high-level mathematical functions to operate on these
arrays.

### NLTK

NLTK (Natural Language ToolKit) provides a suite of text processing
libraries for classification, tokenization, stemming, tagging, parsing,
and semantic reasoning like nltk.sent-tokenization,
nltk.word-tokenization, nltk.stopwords etc. When compared to other
libraries like spacy, genism, scikit-learn, NLTK has many advantages
such as fast tokenization, plenty of approaches to each nlp task, and it
supports a large number of languages.

### React

React is an open-source Javascript library that is used to build user
interfaces. It helps build encapsulated components that manage their own
state, then compose them to make complex UIs. React abstracts away the
DOM from you, offering a simpler programming model and better
performance.\

### sweetalert

SweetAlert is a package in npm used to create beautiful, responsive and
customized alerts in web applications. It gives you different options
according to the need.

Module Description
------------------

### Data Collection

-   Amazon product dataset is downloaded for the Seq2Seq summarization
    model.

-   Dataset of postive and negative tweets available in the NLTK library
    is downloaded for training sentiment analysis model.

### Preprocessing

-   The dataset is divided into training set and test set.

-   Reviews from the training set and test set are preprocessed.

-   Tokenization of sentences and words is done with the functions in
    NLTK library.

-   Stop words are removed using the NLTK corpus of stop words.

-   Unnecessary punctuation marks are eliminated.

-   Abbreviations are resolved by replacing them with their full forms.

-   Lemmatization is carried out to obtain the root word with respect to
    the context.

-   The preprocessed training data is then used for training the model
    and the preprocessed testing data is used for testing the model.

### Training and Testing the Models

-   The Seq2Seq model with Attention Mechanism is developed by defining
    its encoder-decoder architecture and the attention layer.

-   The model is trained with the preprocessed review data

-   The model is tested using the preprocessed testing review data.

-   The model is then saved in .h5 format.

-   The Naive Bayes model is trained with the preprocessed Twitter
    sentiment data.

-   Preprocessed testing review data is then fed into the model to
    obtain the sentiments.

-   This model is also saved and stored as a pickle file.

### Input Module

-   User Interface is built using React.

-   The input is received through an auto-complete drop-down list.

-   The product name is mapped to the product ID and is sent to the
    back-end of the application.

### Summary Generation and Sentiment Analysis

-   The product ID is used to retrieve the reviews from the Amazon
    dataset.

-   The reviews are preprocessed and fed into the summarization model to
    produce summary of each review.

-   The preprocessed reviews are fed into sentiment analysis model to
    obtain the sentiment.

-   The most relevant review summaries are returned to the web
    application along with the sentiment factor.

### Output Display

-   The summary and sentiment along with the basic details of the
    product is displayed.

-   A sweet alert box is used for the same.

Data Flow Diagram
=================

Level 0 DFD
-----------

![DFD Level 0[]{label="fig:dfd0"}](DFDlevel0.png){#fig:dfd0}

Level 1 DFD
-----------

![DFD Level 1[]{label="fig:dfd1"}](DFDlevel1.png){#fig:dfd1}

Level 2 DFD
-----------

![DFD Level 2[]{label="fig:dfd2"}](images/DFDLevel2.png){#fig:dfd2}

Implementation
==============

Algorithms
----------

### Algorithm For Inputting Product Name

Start\
Accept product name from the drop-down list\
Stop\

### Algorithm for Data Collection

Start\
Initialise pid with product id of the chosen product\
Initialise df as product details dataset\
Initialise result as an empty dataframe\
Return result\
Stop\

### Algorithm for Preprocessing

Start\
Separate the words in the data into tokens\
Remove the stop words from the input data\
Resolve abbreviations in the data\
Perform lemmatization on the data\
Stop\

### Algorithm for Training of Seq2Seq Model with Attention Mechanism

Start\
Read dataset into a dataframe\
Preprocess the reviews and summaries from the dataframe\
Remove rows containing null values from dataframe\
Remove rows containing reviews or summaries less than the set value\
Split the training and testing data\
**Training phase:**\
**Inference phase:**\
Stop\

### Algorithm for Naive Bayes Sentiment Analysis Model

Start\
Read dataset into a dataframe\
Preprocess the reviews and summaries from the dataframe\
Remove rows containing null values from dataframe\
Create an instance of Naive Bayes classifier\
Train the model with cleaned data\
Save the model\
Stop\

### Algorithm for Summary Generation

Start\
Initialise df as preprocessed product review data\
Initialise result as empty string array\
Initialize the decoder with internal states of the encoder\
Initialise reqlen as length of summary required\
Let word-frequencies be a dictionary containing frequency of each word
in result\
Score each summary using word-frequencies\
Select required number of sentences in final summary based on maximum
sentence scores\
Return result\
Stop\

### Algorithm for Sentiment Analysis

Start\
Initialise df as preprocessed product review data\
Initialise sent-pos with 0 as value\
Initialise sent-neg with 0 as value\
Return$$( \hspace{0.2cm} \frac{sent-pos \times 100}{n}\ \hspace{0.5cm} and \hspace{0.5cm} \frac{sent-neg \times 100}{n} \hspace{0.2cm} )$$\
Stop\

Development Tools
-----------------

-   **Google Colaboratory**\
    Google Colaboratory is a free cloud service by Google and supports
    free GPU. It provides us with a cloud environment consisting of
    n1-highmem-2 instance machine type, 2 virtual CPU at 2.2GHz, 13GB
    RAM and 64GB Free Space. It has an idle cut-off 90 minutes and can
    be used to run code for free maximum for 12 hours.

-   **Visual Studio Code**\
    Visual Studio Code is a source-code editor developed by Microsoft
    for Windows, Linux and macOS. It includes support for debugging,
    embedded Git control, syntax highlighting, intelligent code
    completion, snippets, and code refactoring.

-   **Git**\
    Git is a free and open source distributed version control system
    designed to handle everything from small to very large projects with
    speed and efficiency. Compared to other version control systems, Git
    is responsive, easy to use, and inexpensive (free, actually).
    Branching allows you to create independent local branches in your
    code.

-   **Postman**\
    Postman is a collaboration platform for API development. Postman's
    features simplify each step of building an API and streamline
    collaboration so you can create better APIs faster. It makes it
    easier for developers to create, share, test and document APIs. This
    is done by allowing users to create and save simple and complex
    HTTP/s requests, as well as read their responses.

Testing
=======

Testing Methodologies
---------------------

Software testing methodologies are the various strategies or approaches
used to test an application to ensure it behaves and looks as expected.
The idea of using various testing methodologies in the development
process is to ensure that the software can successfully work in multiple
environments and different platforms. Broadly, this is broken down into
functional and non-functional testing. In functional testing, the
application is tested against business requirements. Non-functional
testing methods incorporate all test types focused on the operational
aspects of a piece of software. We have performed functional testing
part which includes unit testing, integration testing and system
testing, each of which is described below.

Unit Testing
------------

Unit testing refers to the testing of individual software modules or
components that make up an application or system. It validates that each
module of the software performs as designed.

### Input Module

User selects the required product from the drop-down list.By mapping the
product name to its corresponding product id, all reviews for the
selected product are extracted.

![Drop-down
Selection[]{label="fig:dropdown"}](images/dropdown.png){#fig:dropdown}

### Preprocessing Module

The review data undergoes tokenization, removal of stop words, POS
tagging and lemmatization.

![Preprocessed
Text[]{label="fig:preprocess"}](images/Preprocessed Text.png){#fig:preprocess}

### Model Training

Here, we use a Seq2Seq model with attention mechanism that includes an
encoder, decoder and attention layer. Amazon product dataset which
contains the product reviews and their summaries are fed into the model
to train the model to produce summaries. The model is then tested with a
testing dataset of reviews.

![Seq2Seq Model with Attention Mechanism
Architecture[]{label="fig:train"}](images/model_training1.png){#fig:train}

![Model
training[]{label="fig:train"}](images/model_training0.png){#fig:train}

![Summaries Predicted by Trained
Model[]{label="fig:train"}](images/predicted summary.png){#fig:train}

### Summary Generation

Preprocessed data is fed into the trained seq2seq model. Model generates
an abstractive summary, which is then given to the web application. The
web application displays the generated summary along with the sentiment
and review rating for the user to view.

![Final Summary, Sentiment and Average
Rating[]{label="fig:summaryfinal"}](images/SummaryGeneration.png){#fig:summaryfinal}

Integration Testing
-------------------

Integration testing refers to the testing of the different
modules/components that have been successfully unit tested when
integrated together to perform specific tasks and activities. The
purpose of integration testing is to detect any inconsistencies between
the units that are integrated together.

![Generated
Summary[]{label="fig:integration"}](images/IntegrationTesting.png){#fig:integration}

System Testing
--------------

The system testing part of a testing methodology involves testing the
complete system for errors and bugs. All modules were integrated at the
end of integration testing and the entire system is tested here.

![Abstractive Summarization
System[]{label="fig:finaloutput"}](images/FinalOutput.png){#fig:finaloutput}

Graphical User Interface
========================

GUI Overview
------------

The user interface is quite simple and straight-forward. The home page
gives you the option to select the product from an auto-complete
drop-down list. On selecting the product, a sweet alert appears with the
summary of the reviews, image, sentiment and rating of the product that
was selected.

Main GUI Components
-------------------

![GUI
Interface[]{label="fig:homepage"}](images/homepage.png){#fig:homepage}

The user interface gives you the options to select the product from the
auto complete drop-down list.\

![Drop-down
Selection[]{label="fig:dropdown"}](images/dropdown.png){#fig:dropdown}

After selecting the product, the summary is generated along with the
rating, sentiment and the image of the product in a sweet alert.

Results
=======

![Input Selection[]{label="fig:input"}](images/dropdown.png){#fig:input}

![Generated Abstractive
Summary[]{label="fig:output"}](images/FinalOutput.png){#fig:output}

Conclusion
==========

A user review consolidation system has been developed using the method
of abstractive summarizing to obtain a concise form of the lengthy
product reviews available on e-commerce websites along with additional
features such as overall rating and sentiment analysis. The system uses
a dataset of fine food reviews from Amazon to generate the summaries. It
also generates the general sentiment of the customers towards each
product. The average rating based on the numerous reviews available for
each product is also calculated.\
The sentiment analysis has been performed by training a model based on
supervised learning. The Naive Bayes classifier has been chosen as the
machine learning model, trained on twitter sentiment analysis data,
which provides an accuracy of more than 95%. The abstractive summarizer
has been modelled as a Sequence-to-Sequence model which uses attention
mechanism to improve accuracy. The model gives fairly good summaries of
the reviews.

Future Scope
============

The model is trained using reviews for Fine Foods. It can be extended to
include other categories of items available online, thereby generating
better summaries due to a larger dataset. It can also be improved to
integrate reviews from various online shopping websites to provide an
unbiased summary and rating.\
The generalization capability of a deep learning model enhances with an
increase in the training dataset size. Web scraping can be introduced to
perform summarization on real-time data.\
Implementing Bi-Directional LSTM which is capable of capturing the
context from both the directions could result in a better context
vector. The beam search strategy can be applied for decoding the test
sequence instead of using the greedy approach (argmax).
Pointer-generator networks and coverage mechanisms can be implemented in
the model to further improve the summary generation capability of the
model.

999

https://www.kaggle.com/snap/amazon-fine-food-reviews/home

Chetana Badgujar, Vimla Jethani and Tushar Ghorpade "Abstractive
Summarization using Graph Based Methods" Proceedings of the 2nd
International Conference on Inventive Communication and Computational
Technologies (ICICCT 2018)

Moye Chen, Lei Li, Wei Liu "A Multi-View Abstractive Summarization Model
Jointly Considering Semantics and Sentiment", Proceedings of CCIS2018

Tooba Siddiqui, Jawwad Ahmed Shamsi "Generating Abstractive Summaries
Using Sequence to Sequence Attention Model", 2018 International
Conference on Frontiers of Information Technology (FIT)

Ranjitha N S, Dr. Jagadish S Kallimani "Abstractive Multi-Document
Summarization"

A.Jeyapriya, C.S.Kanimozhi Selvi "Extracting Aspects and Mining Opinions
inProduct Reviews using Supervised Learning Algorithm", IEEE Sponsored
2nd International Conference On Electronics And Communication
Systems(ICECS 2015)

Wenbo Nie, Wei Zhang, Xinle Li, Yao Yu "An Abstractive Summarizer Based
on Improved Pointer-Generator Network"

Kaichun Yao, Libo Zhang , Dawei Du , Tiejian Luo, Lili Tao, and Yanjun
Wu "Dual Encoding for Abstractive Text Summarization", IEEE Transactions
on Cybernetics

Alshaina S, Ansamma John, Aneesh G Nath "Multi-document Abstractive
Summarization Based on Predicate Argument Structure"

Farshad Kiyoumarsi "Evaluation Of Automatic Text Summarizations Based On
Human Summaries", 2nd Global Conference on Linguistics and Foreign
Language Teaching LINELT-2014

Atif Khan, Naomie Salim, Haleem Farman "Clustered Genetic Semantic Graph
Approach for Multi-document Abstractive Summarization"

Shuai Wang, Xiang Zhao, Bo Li, Bin Ge, Daquan Tang "Integrating
Extractive and Abstractive Models for Long Text Summarization", 2017
IEEE 6th International Congress on Big Data

Siddhartha Banerjee, Prasenjit Mitra, Kazunari Sugiyama "Multi Document
Abstractive summarization using ILP Based Multi Sentence Compression"

Alexander M. Rush, Sumit Chopra, Jason Weston "A Neural Attention Model
for Abstractive Sentence Summarization", Proceedings of the 24th
International Joint Conference on Artificial Intelligence (IJCAI-2015)

Jianwei Niu, Huan Chen, Qingjuan Zhao, Limin Sun†, Mohammed Atiquzzaman
"Multi-Document Abstractive Summarization using Chunk-graph and
Recurrent Neural Network", IEEE ICC 2017 SAC Symposium Big Data
Networking Track

Hao Xu, Yanan Cao, Ruipeng Jia, Yanbing Liu, Jianlong Tan "Sequence
Generative Adversarial Network for Long Text Summarization", 2018 IEEE
30th International Conference on Tools with Artificial Intelligence

Harsha Dave, Shree Jaswal "Multiple Text Document Summarization System
usingnHybrid Summarization Technique", 2015 1st International Conference
on Next Generation Computing Technologies

Jagbir Kaur, Meenakshi Bansal "Multi-Layered Sentiment Analytical Model
for Product Review Mining", 2016 Fourth International Conference on
Parallel, Distributed and Grid Computing

Allahyari, Mehdi, et al. "Text Summarization Techniques: A Brief
Survey." arXiv preprint arXiv:1707.02268 2017.

Yao, Jin-ge, Xiaojun Wan, and Jianguo Xiao. "Recent advances in document
summarization" Knowledge and Information Systems: 140 2017.

Sunitha C, Dr. A Jaya and Amal Ganesh "Abstractive Summarization
Techniques in Indian Languages" Peer-review under responsibility of the
Organizing Committee of ICRTCSE 2016 doi: 10.1016/j.procs.2016.05.121,
International Conference of recent trends in computer science., 2016

Khan, Atif, and Naomie Salim. "A review on abstractive summarization
methods."Journal of Theoretical and Applied Information Technology 59.1:
64-72, 2014

Dalal, Vipul, and Latesh G. Malik. "A survey of extractive and
abstractive text summarization techniques." 2013 6th International
Conference on Emerging Trends in Engineering and Technology (ICETET), .
IEEE, 2013.

Vilca, Gregory Csar Valderrama, and Marco Antonio Sobrevilla Cabezudo.
"A Study of Abstractive Summarization Using Semantic Representations and
Discourse Level Information." International Conference on Text, Speech,
and Dialogue. Springer, Cham 2017.

Moratanch, N., and S. Chitrakala. "A survey on abstractive text
summarization" Circuit, International Conference on Power and Computing
Technologies(ICCPCT), IEEE 2016.

Shimpikar, Sheetal, and Sharvari Govilkar "A Survey of Text
Summarization Techniques for Indian Regional Languages" International
Journal of Computer Applications 165.112017

Ganesan, Kavita, ChengXiang Zhai, and Jiawei Han. "Opinosis: a graph
based approach to abstractive summarization of highly redundant
opinions" Proceedings of the 23rd international conference on
computational linguistics. Association for Computational Linguistics
2010

Lloret, Elena and Manuel Palomar. "Analyzing the use of word graphs for
abstractive text summarization" Proceedings of the First International
Conference on Advances in Information Mining and Management, Barcelona,
Spain 2011.

Kumar, Niraj, Kannan Srinathan and Vasudeva Varma. "A knowledge induced
graph-theoretical model for extract and abstract single document
summarization" International Conference on Intelligent Text Processing
and Computational Linguistics. Springer, Berlin, Heidelberg 2013.

Subramaniam, Manjula and Vipul Dalal."Test Model for Rich Semantic Graph
Representation for Hindi Text using Abstractive Method" 2015.

Liu, Fei, et al. "Toward abstractive summarization using semantic
representa-tions."1077,2015

Bhargava, Rupal, Yashvardhan Sharma, and Gargi Sharma. "ATSSI:
Abstractive Text Summarization Using Sentiment Infusion." Procedia
Computer Science 89,404-411 2016

Eduard Hovy, Mitchell Marcus, Martha Palmer, Lance Ramshaw, and
Ralpheischedel. OntoNotes: The 90 solution. In Proceedings of NAACL,2006
