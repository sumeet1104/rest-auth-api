var faker = require('faker');

var db = { issues: [] };
var ward = [];
for (var i=1; i<=50; i++){
  ward.push(i.toString())
}
for (var i=1; i<=100; i++) {
  db.issues.push({
    id: i,
    desc: faker.lorem.sentences(),
    status: (i%2==0)? "Open": ((i%3==0)?"In Progress": "Resolved"),
    createdBy: faker.name.firstName()+" "+faker.name.lastName(),
    contact_number: faker.phone.phoneNumberFormat(),
    lastUpdateBy: faker.name.firstName()+" "+faker.name.lastName(),
    createdOn: faker.date.past(),
    updatedOn: faker.date.recent(),
    complaint_suggestion: (faker.random.arrayElement([true, false]))? "suggestion" : "complaint",
    department: faker.random.arrayElement(["Streetlight", "Sewerage", "Water Supply", "Nagar Council", "SDM Office", "Hospital", "Police", "D.C. Office", "Other..."]),
    ward_number: faker.random.arrayElement(ward),
  });
}

console.log(JSON.stringify(db));
