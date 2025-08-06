# ISIC Rev.5 Tree Visualization

An interactive tree visualization tool for ISIC Rev.5 (International Standard Industrial Classification of All Economic Activities, Revision 5).

## Project Overview

This project provides a web-based interactive interface for browsing and searching the ISIC Rev.5 classification system. ISIC (International Standard Industrial Classification) is the international standard for classifying all economic activities, developed by the United Nations Statistics Division.

## Features

- **Hierarchical Tree Structure**: Display the complete ISIC Rev.5 classification system in a tree format
- **Four-Level Classification Hierarchy**:
  - Section - Identified by letters (A-U)
  - Division - 2-digit numeric codes
  - Group - 3-digit numeric codes
  - Class - 4-digit numeric codes
- **Real-time Search**: Search classification items by code or name
- **Interactive Operations**:
  - Expand/collapse all nodes
  - Click nodes to expand/collapse sub-items
  - Clear search results
- **Statistics Display**: Real-time display of classification counts at each level
- **Responsive Design**: Adapts to different screen sizes

## File Structure

```
├── isic_rev5_tree_visualization.html    # Main visualization interface
├── isic_rev5_data_fixed.js             # ISIC Rev.5 classification data
├── raw_data/                           # Raw data files
├── scripts/                            # Data processing scripts
└── documentation/                      # Project documentation
```

## Usage

1. **Direct Access**: Open `isic_rev5_tree_visualization.html` in your browser
2. **Search Classifications**: Enter code or name keywords in the search box
3. **Browse Hierarchy**: Click the arrows before nodes to expand/collapse sub-classifications
4. **Batch Operations**: Use "Expand All"/"Collapse All" buttons

## Data Source

- Based on the official ISIC Rev.5 classification standard published by the UN Statistics Division
- Data has been cleaned and structured to ensure completeness and accuracy

## Technical Implementation

- **Frontend**: Pure HTML/CSS/JavaScript, no additional dependencies required
- **Data Format**: JSON structured data
- **Styling**: Modern responsive CSS design
- **Compatibility**: Supports modern browsers

## Classification Statistics

ISIC Rev.5 contains:
- 21 Sections
- 88 Divisions
- 238 Groups
- 419 Classes

## Related Projects

This repository also includes a similar visualization tool for GB/T 4754-2017 (China's National Economic Industry Classification):
- `gb_t_4754_tree_visualization.html`

## License

This project is for educational and research purposes only. The ISIC classification standard is copyrighted by the United Nations Statistics Division.

## Contributing

Issues and Pull Requests are welcome to improve this project.

---

*Last updated: January 2025*
