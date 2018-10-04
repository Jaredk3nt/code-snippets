const DEFAULT = {
    data: [],
    isLoading: false
}

const { Provider, Consumer } = React.createContext({ ...DEFAULT });

class HttpProvider extends Component {
    state = { ...DEFAULT };

    async componentDidMount() {
        await this.updateData();
    }

    withLoading = async (fn, body = {}) => {
        this.setState(() => ({ isLoading: true }));
        const res = await fn(body);
        this.setState(() => ({ isLoading: false }));
        return res;
    }

    updateData = async () => {
        const data = await this.withLoading(someHttpCall());
        this.setState(() => ({ data }));
    }

    render() {
        const { children } = this.props;
        return (
            <Provider value={{
                ...this.state,
                updateData: this.updateData
            }}>
                {children}
            </Provider>
        )
    }
}

const HttpConsumer = ({}) => {
    return (
        <Consumer>
            {
                (context) => React.Children.map(this.props.children, (child) =>
                    React.cloneElement(child, { ...context })
                )
            }
        </Consumer>
    )
}

export {
    HttpProvider,
    HttpConsumer
}