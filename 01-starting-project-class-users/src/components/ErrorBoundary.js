import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  // makes the component an error boundary
  // will run when a child component generates an error
  componentDidCatch(error) {
    console.log(error);
    this.setState({ hasError: true });
  }

  // this wraps the ErrorBoundary around the child components
  render() {
    if (this.state.hasError) {
      return <p>Something went wrong!</p>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;