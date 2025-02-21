```javascript
//Correct aggregation pipeline
db.collection.aggregate([
  { $match: { /* some condition */ } },
  { $group: { _id: '$field', count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 10 }
]);
```