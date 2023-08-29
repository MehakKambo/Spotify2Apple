# Spotify2Apple
Spotify2Apple is a web application built using React on the frontend and Node.js on the backend that allows you to transfer your Spotify playlist to an Apple Music playlist seamlessly. This project also aims to implement the reverse functionality in the future, allowing you to transfer Apple Music playlists to Spotify.

## Build Instructions
To run the Spot2Apple web app locally, follow these instructions:

# Prerequisites
- Spotify Developer Account
- Apple Developer Account

# Steps

1. Clone this repo:
   ```bash
   git clone https://github.com/MehakKambo/Spotify2Apple.git
   cd spot2apple
   ```

2. Open the `auth-server/server.js` file and make the following changes:
   - Replace `client_id` and `client_secret` with your Spotify developer account values.
   - Replace `team_id` and `key_id` with your Apple developer account values.

3. Replace the `token_key` variable with a random UUID. Remember to save this UUID as you'll need it to retrieve the token from the server.
4. Copy your Apple Music key file (`.p8`) from your Apple developer account and place it in the `auth-server` folder. This key is used for generating the Apple Music token.
5. Navigate to the `auth-server` folder, install dependencies, and start the server:
   ```bash
   cd auth-server
   npm install
   npm start
   ```

   Ensure the server is running by visiting:
   - `http://localhost:8888/login` (should redirect to Spotify login page)
   - `http://localhost:8888/token?key=your_UUID_from_step3` (should return a token)

6. Navigate to the spot2apple folder, open `src/apple/apple-auth.js`, and replace the `key` with the UUID from step 3.
7. Install dependencies and start the React app:
   ```bash
   cd ../spot2apple
   npm install
   npm start
   ```
8. Access the Spotify2Apple app by visiting `http://localhost:3000` in your web browser.

### Future Features and Contributions
In the future, the Spot2Apple project aims to implement the ability to transfer Apple Music playlists to Spotify. If you're interested in contributing to this project, feel free to fork the repository, make your changes, and submit a pull request. We welcome contributions from the community to enhance the functionality and usability of Spot2Apple.

## Happy playlist transferring! 🎵🎉
## Yours truly: Mehak
