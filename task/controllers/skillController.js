var bodyParser = require('body-parser');



var data = [{item:'java'},{item:'nodejs'},{item:'Ruby'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

app.get('/skill', function(req, res){
res.render('skill', {skills: data});

});

app.post('/skill', urlencodedParser, function(req, res){
data.push(req.body);
res.json(data);

});

app.delete('/skill', function(req, res){

data = data.filter(function (skill) {
  return skill.item.replace(/ /g, '-') !== req.params.item;

});
});

};
