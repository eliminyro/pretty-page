# NodeJS Pretty Page App

## Description
This is a simple Node.js application that serves a visually appealing webpage with a gradient background and a centered card layout. The app is packaged into a single JavaScript file using Webpack and can be deployed as a Docker container.

## Files Included
Below are the files generated by the setup script:

### Application Files
1. **`package.json`**: Defines the project's dependencies and scripts.
2. **`src/server.js`**: Contains the Express-based server code to serve the webpage.
3. **`webpack.config.js`**: Configuration for Webpack to bundle the application into one file.
4. **`Dockerfile`**: Used to build a two-stage Docker image for the application.

### Supporting Directories
- **`src/`**: Contains the source code for the application.
- **`dist/`**: Stores the Webpack-bundled application.
- **`public/`**: Reserved for static files (not utilized in this setup).

## Setup Instructions
### Prerequisites
1. [Docker](https://www.docker.com/) must be installed on your system.

### Steps to Build and Run
1. Clone the repository or copy the generated files into a new directory.
2. Navigate to the directory in your terminal.
3. Build the Docker image using the provided Dockerfile:
   ```bash
   docker build -t nodejs-pretty-page .
   ```
4. Run the Docker container:
   ```bash
   docker run -p 3000:3000 nodejs-pretty-page
   ```
5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```
   You should see the "Pretty Page" application running.

## Application Features
- **Responsive Design**: The webpage adjusts to different screen sizes and looks visually appealing.
- **Card Layout**: Includes a card with a heading and description, styled with modern CSS.
- **Static Background**: Features a gradient background for enhanced aesthetics.

## Technologies Used
- **Node.js**: For the server-side application.
- **Express.js**: To serve the HTTP requests.
- **Webpack**: To bundle the application into a single JavaScript file.
- **Docker**: For containerization and portability.

## Project Structure
```
nodejs-pretty-page/
├── Dockerfile
├── README.md
├── dist/
├── package.json
├── public/
├── src/
│   └── server.js
└── webpack.config.js
```

## Additional Notes
- The `dist/` directory is generated during the build process and contains the bundled application.
- You can customize the webpage by modifying the `src/server.js` file and rebuilding the Docker image.

## License
This project is open-source and available for modification or distribution.


