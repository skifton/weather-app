<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/devTonie/weather-app">
    <img src="./src/screenshots/logo.png" alt="Logo" width="200" height="200">
  </a>

<h3 align="center">Weather App</h3>

  <p align="center">
    <br />
    <a href="https://github.com/devTonie/weather-app"><strong>Explore the docs »</strong></a>
    <br />
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Weather App Screen Shot][weather-screenshot]](https://github.com/devTonie/weather-app/)

This application was developed using the React library to search and view the weather for the current day and the week ahead.



### Built With
* [React](React-url)
* [React-Router-Dom](React-Router-url)
* [Axios](Axios-url)
* [clsx](Clsx-url)
* [Headlessui](Headlessui-url)
* [Heroicons](Heroicons-url)
* [TypeScript](Typescript-url)



<!-- GETTING STARTED -->
## Getting Started

This section provides a brief description of how to deploy and run the project.

### Prerequisites

First of all, your device must have Node js and then you can write in your console this comand
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [https://www.weatherapi.com](https://www.weatherapi.com)
2. Clone the repo
   ```sh
   git clone https://github.com/devTonie/weather-app.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `weather.service.ts`
   ```js
   const api = 'ENTER YOUR API';
   ```


<!-- USAGE EXAMPLES -->
## Usage

On first launch, you will see the weather for today and 7 days ahead for the default location (Batumi, Georgia).

You also have the option to search for your own location using the autocomplete search bar.
[![Autocomplete Screen][autocomplete-screenshot]](https://github.com/devTonie/weather-app/)

<!-- CONTACT -->
## Contact

My Linkedin - [Anton Simanenkau](https://www.linkedin.com/in/anton-simonenkov-618788255/)

Project Link: [https://github.com/devTonie/weather-app](https://github.com/devTonie/weather-app)



<!-- MARKDOWN LINKS & IMAGES -->
[weather-screenshot]: ./src/screenshots/main-page.png
[autocomplete-screenshot]: ./src/screenshots/autocomplete-input.png
[React-url]: https://reactjs.org/
[React-Router-url]: https://reactrouter.com/en/main
[Axios-url]: https://axios-http.com/docs/intro
[Clsx-url]: https://www.npmjs.com/package/clsx
[Headlessui-url]: https://headlessui.com/
[Heroicons-url]: https://heroicons.com/
[Typescript-url]: https://www.typescriptlang.org/
