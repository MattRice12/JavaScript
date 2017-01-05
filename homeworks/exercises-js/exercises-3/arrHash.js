var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];

function arrHash(instructorsArr) {
  var jsArr = [];
  instructorsArr.forEach(function(instructor) {
    if (instructor.teaches === 'JavaScript') {
      jsArr.push(instructor.firstname);
    }
  })
  jsArr.sort();
  console.log(jsArr);
}

arrHash(instructors);
