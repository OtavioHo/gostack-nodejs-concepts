# Node.js Concepts

First challenge from Rocketseat's GoStack bootcamp.

## Description

Implementation of a simple application that stores repositories using express.js .
Challenge description: https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/desafio-conceitos-nodejs

## How to test
 1 - Clone the repository
 `git clone https://github.com/OtavioHo/gostack-nodejs`
 2 - Install the node dependencies
 `yarn`
 3 - Run the application
 `yarn dev`

## API
**Show repositories**
----
_Show all added repositories._

* **URL**

    _/repositories_

* **Method**
    _`GET`_

* **Success Response:**
    _An array with all repositories_
    
    * **Code:** 200 <br />
      **Content:**
      ``` 
        [
            {
                "id": "f884efea-bf8d-4112-a926-307fa9588e25",
                "title": "Titulo1 - update",
                "url": "http://titulo1.com.br",
                "techs": [
                "javascript",
                "python"
                ],
                "likes": 2
            },
        ]
      ```

**Add repository**
----
_Create new repository._

* **URL**

    _/repositories_

* **Method**
    _`POST`_

* **Data Params**
    - title: `string`
    - url: `string`
    - techs: `array<strings>`

* **Success Response:**
    _An object with the added repository._
    
    * **Code:** 200 <br />
      **Content:**
      ``` 
        {
            "id": "f884efea-bf8d-4112-a926-307fa9588e25",
            "title": "Titulo1 - update",
            "url": "http://titulo1.com.br",
            "techs": [
            "javascript",
            "python"
            ],
            "likes": 2
        },
      ```

**Edit repository**
----
_Edit repository._

* **URL**

    _/repositories/:id_

* **Method**
    <_`PUT`_>

* **Data Params**
    - title: `string`
    - url: `string`
    - techs: `array<strings>`

* **Success Response:**
    _An object with the added repository._
    
    * **Code:** 200 <br />
      **Content:**
      ``` 
        {
            "id": "f884efea-bf8d-4112-a926-307fa9588e25",
            "title": "Titulo1 - update",
            "url": "http://titulo1.com.br",
            "techs": [
            "javascript",
            "python"
            ],
            "likes": 2
        },
      ```

**Delete repository**
----
_Delete repository._

* **URL**

    _/repositories/:id_

* **Method**
    _`Delete`_

* **Success Response:**
    * **Code:** 204 <br />

**Like repository**
----
_Show all added repositories._

* **URL**

    _/repositories/:id_

* **Method**
    _`POST`_

* **Success Response:**
    _An object with the liked repository._
    
    * **Code:** 200 <br />
      **Content:**
      ``` 
        {
            "id": "f884efea-bf8d-4112-a926-307fa9588e25",
            "title": "Titulo1 - update",
            "url": "http://titulo1.com.br",
            "techs": [
            "javascript",
            "python"
            ],
            "likes": 2
        },
      ```