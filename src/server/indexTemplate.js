export const indexTemplate = (content) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">    
    <title>Lottery</title>    
</head>
<body>
    <div id="react_root">${content}</div>
    <div id="menu_dots"></div>
    <div id="modal_root"></div>
    <script defer src="/static/client.js" type="application/javascript"></script>   
</body>
</html> `;