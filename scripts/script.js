body {
    font-family: Arial, sans-serif;
    background-image: url('data:image/svg+xml,%3Csvg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h16v2h-6v6h6v8H8v-6H2v6H0V0zm4 4h2v2H4V4zm8 8h2v2h-2v-2zm-8 0h2v2H4v-2zm8-8h2v2h-2V4z" fill="%239C92AC" fill-opacity="0.4" fill-rule="evenodd"/%3E%3C/svg%3E');
    background-color: darkblue;
}

.container {
    max-width: 700px;
    margin: 60px auto;
    padding: 20px;
    background-color: darkgreen;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
    color: yellow;
}

label {  /* instructions */
    display: block;
    margin-bottom: 10px;
    color: orange;
}

input[type="text"] {
    width: 90%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button { /* submit button */
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

#result {
    margin-top: 20px;
    font-weight: bold;
}

footer {  /* name and class information */
    color: red;
}

#fullOutput {
    display: flex;
    flex-wrap: wrap;
    color: yellow
  }
  
#textOutput {
    flex: 1 1 auto;
    margin-right: 20px; 
  }
  
#imageOutput {
    flex: 0 0 auto;
  }
