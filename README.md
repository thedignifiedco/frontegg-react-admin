# Frontegg React Admin

This project demonstrates how to integrate [Frontegg's React SDK](https://frontegg.com/) with [React-Admin](https://marmelab.com/react-admin/), enabling a secure, feature-rich admin dashboard. Frontegg’s SDK provides robust user management, authentication, and other security features seamlessly within your React application.

## Getting Started

### Prerequisites

- Node.js (>= 14.x.x)
- npm or yarn
- A Frontegg account and workspace ([Sign up here](https://frontegg.com/)) to get your client ID and API base URL.

### Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/thedignifiedco/frontegg-react-admin.git
    cd frontegg-react-admin
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

    or, if you prefer yarn:

    ```bash
    yarn install
    ```

3. **Configure Frontegg**

    To set up Frontegg, you will need your `FRONTEGG_CLIENT_ID` and `FRONTEGG_BASE_URL`. These can be found in your Frontegg workspace settings.

    Create a `.env` file in the root directory and add your Frontegg credentials:

    ```plaintext
    REACT_APP_FRONTEGG_BASE_URL=https://your_base_url.frontegg.com
    REACT_APP_FRONTEGG_CLIENT_ID=your_client_id
    REACT_APP_FRONTEGG_APP_ID=your_app_id
    ```

### Running the App

To start the development server, run:

```bash
npm start
