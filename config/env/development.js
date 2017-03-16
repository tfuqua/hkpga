const config = {};

config.port = 3000;
config.firebase = {
    logging: true,
    creds: {
        apiKey: "AIzaSyCKVl4dyJM59an6sX5CcqVHSLgXfVvHTjM",
        authDomain: "taylor-fuqua.firebaseapp.com",
        databaseURL: "https://taylor-fuqua.firebaseio.com",
        storageBucket: "taylor-fuqua.appspot.com",
        messagingSenderId: "442806122444"
    }    
};
config.editor = {
    modules: {
        toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean']
        ],
    },
    formats: [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ],        
}

export default config;
