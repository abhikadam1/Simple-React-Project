// ReactDOM.render(<h1>Hello, everyone</h1>, document.getElementById('root'));
// ReactDOM.render(<p>Hello, React</p>, document.querySelector('#root')); 

const navbar = <nav>
<ul>
    <li>Menu</li>
    <li>About</li>
    <li>Contact</li>
</ul>
</nav>;

ReactDOM.createRoot(document.querySelector('#root')).render(navbar);

    const h1 = document.createElement('h1');
    h1.textContent = 'Hello, everyone';
    document.getElementById('root').appendChild(h1);
    console.log(h1);
    

    const element = <h6>Some JSX element.</h6>
    console.log(element);
    