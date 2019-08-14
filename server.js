const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.get('/api/customers' , (req, res) => {
    res.send([
        {
            'id':'react1',
            'image' : 'https://placeimg.com/64/64/1',
            'name' : '홍길동전',
            'birthday' : '961222',
            'gender' : '남자',
            'job' : '의적'
          },
          {
            'id':'react2',
            'image' : 'https://placeimg.com/64/64/2',
            'name' : '임꺽정',
            'birthday' : '961222',
            'gender' : '남자',
            'job' : '의적?'
          },
          {
            'id':'react3',
            'image' : 'https://placeimg.com/64/64/3',
            'name' : '김선달',
            'birthday' : '961222',
            'gender' : '남자',
            'job' : '사기꾼'
          }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));