class HttpProvider extends Component {
    state = {
        isLoading: false,
        data: []
    }
    // Fetch initial data on mount
    async componentDidMount() {
        await this.updateData();
    }
    // HOF for adding loading to async function
    withLoading = async (fn) => {
        return (body = {}) => {
            this.setState(() => ({ isLoading: true }));
            await fn(body);
            this.setState(() => ({ isLoading: false }));
        };
    }
    // Get data
    updateData = this.withLoading(async () => {
        const data = await someHttpCall();
        this.setState(() => ({ data }));
    })
    // Inject state and exposed functions to children as props
    render() {
        return (
            <>
                {
                    React.Children.map(this.props.children, (child) =>
                        React.cloneElement(child, {
                            ...this.state,
                            updateData: this.updateData
                        })
                    )
                }
            </>
        );
    }
}