# AI-Powered Chat Application with Advanced Tool Integration

This project provides a modern, efficient chat interface powered by Claude 3.5 Sonnet with sophisticated tool integrations for enhanced AI capabilities. The application features optimized prompt caching, custom data source integrations, and real-time streaming—all within a Next.js 15 framework.

## Key Features

### Optimized AI Responses with Prompt Caching

- Implements Anthropic's caching feature to drastically reduce token usage
- Stores and reuses common prompts to minimize redundant API calls
- Intelligently invalidates cache when context changes

### Seamless Data Source Integration

- Leverages IBM's wxflows tooling to quickly transform any data source into usable tools
- Includes ready-made connectors for YouTube transcripts and Google Books APIs
- Allows adding new data sources with minimal configuration

### Advanced Tool Orchestration with LangChain and LangGraph

- Manages application state using StateGraph for persistent conversation context
- Coordinates complex tool interactions through ToolNode
- Preserves conversation history with MemorySaver
- Implements intelligent message trimming to maximize context window utilization

### Custom Streaming Solution for Next.js 15

- Delivers real-time token streaming for immediate user feedback
- Provides visual indicators during tool execution
- Includes robust error handling for failed tool calls
- Works around LangChainAdapter limitations for custom tool implementations

### Modern Chat Interface

- Presents real-time updates as the AI generates responses
- Maintains comprehensive message history with pagination
- Visualizes tool interactions for improved user understanding

### User Authentication and Data Persistence

- Implements secure authentication using Clerk
- Integrates with Convex database for reliable data storage
- Manages user profiles and permissions
- Persists chat history for continuous conversations
- Enables real-time data synchronization across devices

### Claude 3.5 Sonnet Integration

- Leverages Claude's 4096 token context window for extended conversations
- Enables tool-augmented responses for enhanced capabilities
- Maintains context-aware conversations for natural interactions
- Implements efficient token management to maximize usage

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Configure environment variables for API keys
4. Run the development server with `npm run dev`
5. Visit `http://localhost:3000` to start chatting

## Prerequisites

- Node.js 18 or higher
- Anthropic API key
- Clerk account for authentication
- Convex account for database services

This project demonstrates how to build sophisticated AI applications that extend beyond simple chat interfaces by integrating powerful tools, optimizing performance, and creating seamless user experiences.
