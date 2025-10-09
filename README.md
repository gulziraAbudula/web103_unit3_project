# WEB103 Project 3 - UnityGrid Plaza

Submitted by: Gulzira Abdullah

About this web app: UnityGrid Plaza is a virtual community hub that helps users explore popular event venues and discover upcoming events happening at each location. The app connects the frontend React interface with a PostgreSQL database through an Express.js backend API.

Time spent: 7 hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->

- [ ] **The web app uses React to display data from the API**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured Events table**
  - [x]  **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  - [x]  **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command 'SELECT * FROM tablename;' to display your table contents.**
- [x] **The web app displays a title.**
- [ ] **Website includes a visual interface that allows users to select a location they would like to view.**
  - [ ] *Note: A non-visual list of links to different locations is insufficient.* 
- [ ] **Each location has a detail page with its own unique URL.**
- [ ] **Clicking on a location navigates to its corresponding detail page and displays list of all events from the `events` table associated with that location.**

The following **optional** features are implemented:

- [ ] An additional page shows all possible events
  - [ ] Users can sort *or* filter events by location.
- [ ] Events display a countdown showing the time remaining before that event
  - [ ] Events appear with different formatting when the event has passed (ex. negative time, indication the event has passed, crossed out, etc.).

The following **additional** features are implemented:

- [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src="./client/src/assets/codepath_WEB103_unit3.gif" title="Video Walkthrough" width="600" alt="Video Walkthrough" />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with LICECap
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

I'm having hard time understanding the connection between controller and routes and how it displays on UI.

## License

Copyright [2025] [Gulzira Abdullah]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.