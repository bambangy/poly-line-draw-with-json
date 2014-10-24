Drawing Polyline from database data point
========================

This is drawing polyline using retrieved data from database (mysql).
1. Getting data from database with php script and then convert data to json format.
2. Json data will processed by getJSON function. Then data will separated into point-items.
3. Each point-item have detail like name,latitude and longitude.
4. Each point-item will stored in a marker dan info-windows array (this for more creation of markers)
5. Each marker stored in polyline array.
6. Last, lines will drawed as point-item's coordinates.

Creator : Bambang Yudhotomo
Email   : bambangyudhotomo@gmail.com
Source  : Google maps API documentation
