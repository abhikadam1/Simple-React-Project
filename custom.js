// ReactDOM.render(<h1>Hello, everyone</h1>, document.getElementById('root'));
// ReactDOM.render(<p>Hello, React</p>, document.querySelector('#root')); 

const navbar = <nav>
    <ul>
        <li>Menu</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
</nav>;

// ReactDOM.createRoot(document.querySelector('#root')).render(navbar);
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(navbar);

const page = (
    <div>
        <img src="./react-logo.jpeg" width="100px;" ></img>
        <h1>Hello, everyone</h1>
        <h2>Fun fact about React</h2>
        <ul>
            <li><h6>React is a library</h6></li>
            <li>React is used for building user interfaces</li>
            <li>React is used for building user interfaces</li>
        </ul>
    </div>
);

function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.jpeg" width="100px;" ></img>
            </nav>
        </header>
    )
}

function Component1() {
    return (
        <div>
            <page />
            <Header />
            <h1>Hello, everyone</h1>
            <h2>Fun fact about React</h2>
            <ul>
                <li><h6>React is a library</h6></li>
                <li>React is used for building user interfaces</li>
                <li>React is used for building user interfaces</li>
            </ul>
        </div>
    );
}

ReactDOM.render(page, document.getElementById('pageContainer'));
root.render(Component1());
// ReactDOM.render(Component1, document.getElementById('pageContainer'));