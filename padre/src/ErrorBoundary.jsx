import { Component } from "react";
import { Link } from "@tanstack/react-router";

export class ErrorBoundary extends Component {
  state = { hasError: false };
  constructor(props) {
    super(props);
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // send error to logging service
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Uh on!</h2>
          <p>
            Something went wrong. Please try again or contact support if the
            problem persists. <Link to="/">Go back to the home page</Link>
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
