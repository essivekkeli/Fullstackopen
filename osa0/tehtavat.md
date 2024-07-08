
0.4

```mermaid
sequenceDiagram
    participant browser
    participant server
    
    #Lisataan uusi muistiinpano
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: 302 Redirect
    deactivate server

    #Haetaan ensin HTML sivu serverilta
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server
    
    #Haetaan css file
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server
    
    #Haetaan js file
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server
    
    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server
    
    #Haetaan listan data data.json tiedostosta
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server    

    Note right of browser: The browser executes the callback function that renders the notes 


    

    
```


0.5

```mermaid
sequenceDiagram
    participant browser
    participant server
    

    #Haetaan ensin HTML sivu serverilta
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server
    
    #Haetaan css file
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server
    
    #Haetaan js file
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server
    
    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server
    
    #Haetaan listan data data.json tiedostosta
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "jnjn", "date": "2024-06-15T20:03:18.804Z" }, ... ]
    deactivate server    

    Note right of browser: The browser executes the callback function that renders the notes
    
```

0.6

```mermaid
sequenceDiagram
    participant browser
    participant server

    #Lisataan uusi muistiinpano
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: 201 created
    deactivate server

 
    browser->>server: notes.push(note)
    activate server
    server-->>browser: {"message":"note created"}
    deactivate server

```