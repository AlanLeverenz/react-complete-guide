import { Component } from 'react';

class ErrorBoundary extends Component {
  // makes the component an error boundary
  // will run when a child component generates an error
  componentDidCatch() { }

  // this wraps the ErrorBoundary around the child components
  render() {
    return this.props.children;
  }
}

export default ErrorBoundary;