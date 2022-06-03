require('./database-connection')

const Comment = require('./models/comment')
const Movie = require('./models/movie')
const Theater = require('./models/theater')

async function main() {
  console.log(await Movie.findOne())
}

// async function main() {
//   const theatersByState = await Theater.aggregate([
//     { $group: { _id: '$location.address.state', theaters: { $push: '$theaterId' }, numberOfTheaters: { $sum: 1 } } },
//     { $set: { state: '$_id' } },
//     { $unset: '_id' },
//     { $sort: { numberOfTheaters: -1 } },
//     {
//       $group: {
//         _id: 1,
//         mostCrowdedState: { $first: '$state' },
//         mostCrowdedCount: { $first: '$numberOfTheaters' },
//         leastCrowdedState: { $last: '$state' },
//         leastCrowdedCount: { $last: '$numberOfTheaters' },
//       },
//     },
//     {
//       $project: {
//         _id: 0,
//         mostCrowdedState: {
//           name: '$mostCrowdedState',
//           numberOfTheaters: '$mostCrowdedCount',
//         },
//         leastCrowdedState: {
//           name: '$leastCrowdedState',
//           numberOfTheaters: '$leastCrowdedCount',
//         },
//       },
//     },
//   ])

//   console.log(theatersByState)

//   const popularmoviesByDayOfWeek = await Movie.aggregate([
//     {
//       $group: {
//         _id: { $isoDayOfWeek: '$released' },
//         count: { $sum: 1 },
//         avgRating: { $avg: '$imdb.rating' },
//         stdDev: { $stdDevPop: '$imdb.rating' },
//       },
//     },
//     { $sort: { avgRating: -1 } },
//   ])

//   console.log(popularmoviesByDayOfWeek)
// }

main()
