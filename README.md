<h1>JewelleryShop</h1>

JewelleryShop is a web application designed to provide a seamless online shopping experience for jewellery enthusiasts. The application includes user authentication, a product listing page, a checkout process, and dynamic views for enhanced user interaction.


<h2>Installation</h2>
Clone the repository:

<pre><code>
git clone https://github.com/yourusername/JewelleryShop.git
cd JewelleryShop </code></pre>
Install the dependencies:

<pre><code>
npm install </code></pre>
<h2>Usage</h2>
Start the application:

<pre><code>
npm start
Open your browser and navigate to http://localhost:3000  </code></pre>

<h2>Project Structure</h2>
auth.js: Handles user authentication logic. <br>
index.js: Main entry point for the application, sets up the server and routes.<br>
package.json: Contains metadata about the project and its dependencies.<br>
package-lock.json: Locks the dependencies versions.<br>
Implementation Details.doc: Documentation detailing the implementation of the project.<br>
Directories
home/
checkout.html: HTML file for the checkout page.
index.html: HTML file for the home page.
image/: Contains image assets used in the application.
views/
failed.ejs: EJS template for the failed transaction view.
home.ejs: EJS template for the home page.
item.ejs: EJS template for the item details page.
<h2>Features</h2>
User Authentication: Secure login and signup functionality.
Product Listing: Dynamic listing of jewellery items.
Checkout Process: Seamless checkout experience.
Templating: Dynamic pages using EJS.
<h2>Dependencies</h2>
Express: Web framework for Node.js
EJS: Embedded JavaScript templating.
Additional dependencies listed in package.json.
<h2>Contributing</h2>
Contributions are welcome! Please open an issue or submit a pull request for any changes or additions.

<h2>License</h2>
This project is licensed under the MIT License.
