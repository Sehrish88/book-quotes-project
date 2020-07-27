I am going to be building an inspirational quotes list app
Users can create quotes, add them to their list, look at an index of quotes, and delete quotes 
There are two models, quotes and books, books have many quotes and quotes beloong to a book
Books can have an attribute of genre and author:


Quotes
-belong to a book

Books
-has many quotes
-genre: string
-author: string 
-title: string 