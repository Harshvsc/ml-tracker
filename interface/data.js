const roadmapData = [
  {
    "day": 1,
    "focus": "Python + SQL Lock",
    "topic": "Python Basics",
    "subtopic": "Start",
    "task": "Variables & Data Types (write 20 examples)",
    "id": 1
  },
  {
    "day": 1,
    "focus": "Python + SQL Lock",
    "topic": "Python Basics",
    "subtopic": "Start",
    "task": "Type conversion exercises (10 examples)",
    "id": 2
  },
  {
    "day": 1,
    "focus": "Python + SQL Lock",
    "topic": "Python Basics",
    "subtopic": "Start",
    "task": "Install Python + VS Code + Git",
    "id": 3
  },
  {
    "day": 1,
    "focus": "Python + SQL Lock",
    "topic": "Python Basics",
    "subtopic": "Start",
    "task": "Setup project folder",
    "id": 4
  },
  {
    "day": 1,
    "focus": "Python + SQL Lock",
    "topic": "Python Basics",
    "subtopic": "Start",
    "task": "Deliverable: day1_basics.py",
    "id": 5
  },
  {
    "day": 2,
    "focus": "Python + SQL Lock",
    "topic": "Python Basics",
    "subtopic": "Functions",
    "task": "Functions (write 10 custom functions)",
    "id": 6
  },
  {
    "day": 2,
    "focus": "Python + SQL Lock",
    "topic": "Python Basics",
    "subtopic": "Functions",
    "task": "Default arguments",
    "id": 7
  },
  {
    "day": 2,
    "focus": "Python + SQL Lock",
    "topic": "Python Basics",
    "subtopic": "Functions",
    "task": "Return values",
    "id": 8
  },
  {
    "day": 2,
    "focus": "Python + SQL Lock",
    "topic": "Python Basics",
    "subtopic": "Functions",
    "task": "Practice 5 small logic problems",
    "id": 9
  },
  {
    "day": 2,
    "focus": "Python + SQL Lock",
    "topic": "Python Basics",
    "subtopic": "Functions",
    "task": "Deliverable: functions_practice.py",
    "id": 10
  },
  {
    "day": 3,
    "focus": "Python + SQL Lock",
    "topic": "Python Basics",
    "subtopic": "Control Flow",
    "task": "Loops (for/while)",
    "id": 11
  },
  {
    "day": 3,
    "focus": "Python + SQL Lock",
    "topic": "Python Basics",
    "subtopic": "Control Flow",
    "task": "10 loop exercises",
    "id": 12
  },
  {
    "day": 3,
    "focus": "Python + SQL Lock",
    "topic": "Python Basics",
    "subtopic": "Control Flow",
    "task": "List comprehension (5 examples)",
    "id": 13
  },
  {
    "day": 3,
    "focus": "Python + SQL Lock",
    "topic": "Python Basics",
    "subtopic": "Control Flow",
    "task": "Debugging practice.",
    "id": 14
  },
  {
    "day": 4,
    "focus": "Python + SQL Lock",
    "topic": "SQL",
    "subtopic": "Basics",
    "task": "SQL: SELECT",
    "id": 15
  },
  {
    "day": 4,
    "focus": "Python + SQL Lock",
    "topic": "SQL",
    "subtopic": "Basics",
    "task": "WHERE",
    "id": 16
  },
  {
    "day": 4,
    "focus": "Python + SQL Lock",
    "topic": "SQL",
    "subtopic": "Basics",
    "task": "15 filtering problems.",
    "id": 17
  },
  {
    "day": 5,
    "focus": "Python + SQL Lock",
    "topic": "SQL",
    "subtopic": "Aggregation",
    "task": "SQL: GROUP BY",
    "id": 18
  },
  {
    "day": 5,
    "focus": "Python + SQL Lock",
    "topic": "SQL",
    "subtopic": "Aggregation",
    "task": "COUNT, SUM, AVG",
    "id": 19
  },
  {
    "day": 5,
    "focus": "Python + SQL Lock",
    "topic": "SQL",
    "subtopic": "Aggregation",
    "task": "15 aggregation problems.",
    "id": 20
  },
  {
    "day": 6,
    "focus": "Python + SQL Lock",
    "topic": "Python OOP",
    "subtopic": "Core",
    "task": "Python OOP: Classes, objects",
    "id": 21
  },
  {
    "day": 6,
    "focus": "Python + SQL Lock",
    "topic": "Python OOP",
    "subtopic": "Core",
    "task": "Create 3 real-world classes (BankAccount, Student, Product)",
    "id": 22
  },
  {
    "day": 6,
    "focus": "Python + SQL Lock",
    "topic": "Python OOP",
    "subtopic": "Core",
    "task": "Solve 5 OOP problems.",
    "id": 23
  },
  {
    "day": 7,
    "focus": "Python + SQL Lock",
    "topic": "SQL",
    "subtopic": "Joins",
    "task": "SQL INNER JOIN (15 problems)",
    "id": 24
  },
  {
    "day": 7,
    "focus": "Python + SQL Lock",
    "topic": "SQL",
    "subtopic": "Joins",
    "task": "SQL LEFT JOIN (10 problems)",
    "id": 25
  },
  {
    "day": 7,
    "focus": "Python + SQL Lock",
    "topic": "SQL",
    "subtopic": "Joins",
    "task": "Revise previous mistakes.",
    "id": 26
  },
  {
    "day": 8,
    "focus": "Python + SQL Lock",
    "topic": "Python Integration",
    "subtopic": "Files",
    "task": "Python: File Handling (read/write CSV)",
    "id": 27
  },
  {
    "day": 8,
    "focus": "Python + SQL Lock",
    "topic": "Python Integration",
    "subtopic": "Files",
    "task": "Build CSV reader script",
    "id": 28
  },
  {
    "day": 8,
    "focus": "Python + SQL Lock",
    "topic": "Python Integration",
    "subtopic": "Files",
    "task": "SQL: 10 problems mixed.",
    "id": 29
  },
  {
    "day": 9,
    "focus": "Python + SQL Lock",
    "topic": "SQL",
    "subtopic": "Nesting",
    "task": "SQL Subqueries (15 problems)",
    "id": 30
  },
  {
    "day": 9,
    "focus": "Python + SQL Lock",
    "topic": "SQL",
    "subtopic": "Nesting",
    "task": "Practice nested queries.",
    "id": 31
  },
  {
    "day": 10,
    "focus": "Python + SQL Lock",
    "topic": "Python",
    "subtopic": "Errors",
    "task": "Python: Exception handling",
    "id": 32
  },
  {
    "day": 10,
    "focus": "Python + SQL Lock",
    "topic": "Python",
    "subtopic": "Errors",
    "task": "Write 5 try-except use cases",
    "id": 33
  },
  {
    "day": 10,
    "focus": "Python + SQL Lock",
    "topic": "Python",
    "subtopic": "Errors",
    "task": "Debug broken code.",
    "id": 34
  },
  {
    "day": 11,
    "focus": "Python + SQL Lock",
    "topic": "SQL",
    "subtopic": "Analysis",
    "task": "SQL Window Functions (ROW_NUMBER, RANK, DENSE_RANK)",
    "id": 35
  },
  {
    "day": 11,
    "focus": "Python + SQL Lock",
    "topic": "SQL",
    "subtopic": "Analysis",
    "task": "15 problems.",
    "id": 36
  },
  {
    "day": 12,
    "focus": "Python + SQL Lock",
    "topic": "Python",
    "subtopic": "Environment",
    "task": "Python: Modules & virtual environments",
    "id": 37
  },
  {
    "day": 12,
    "focus": "Python + SQL Lock",
    "topic": "Python",
    "subtopic": "Environment",
    "task": "Structure mini project folder properly.",
    "id": 38
  },
  {
    "day": 13,
    "focus": "Python + SQL Lock",
    "topic": "SQL",
    "subtopic": "Speed",
    "task": "SQL 20 mixed problems (timed).",
    "id": 39
  },
  {
    "day": 14,
    "focus": "Python + SQL Lock",
    "topic": "Project",
    "subtopic": "Cleaner",
    "task": "Build Python Mini Project #1 (CSV data cleaner).",
    "id": 40
  },
  {
    "day": 15,
    "focus": "Python + SQL Lock",
    "topic": "SQL",
    "subtopic": "Opt",
    "task": "SQL Index basics (conceptual)",
    "id": 41
  },
  {
    "day": 15,
    "focus": "Python + SQL Lock",
    "topic": "SQL",
    "subtopic": "Opt",
    "task": "15 optimization-style problems.",
    "id": 42
  },
  {
    "day": 16,
    "focus": "Python + SQL Lock",
    "topic": "Python",
    "subtopic": "DevOps",
    "task": "Python Logging",
    "id": 43
  },
  {
    "day": 16,
    "focus": "Python + SQL Lock",
    "topic": "Python",
    "subtopic": "DevOps",
    "task": "Add logging to project.",
    "id": 44
  },
  {
    "day": 17,
    "focus": "Python + SQL Lock",
    "topic": "SQL",
    "subtopic": "Daily",
    "task": "SQL 20 problems.",
    "id": 45
  },
  {
    "day": 18,
    "focus": "Python + SQL Lock",
    "topic": "Python",
    "subtopic": "Refactor",
    "task": "Python: Refactor mini project cleanly.",
    "id": 46
  },
  {
    "day": 19,
    "focus": "Python + SQL Lock",
    "topic": "SQL",
    "subtopic": "Daily",
    "task": "SQL 20 problems.",
    "id": 47
  },
  {
    "day": 20,
    "focus": "Python + SQL Lock",
    "topic": "Project",
    "subtopic": "API",
    "task": "Build Python Mini Project #2 (API fetch script).",
    "id": 48
  },
  {
    "day": 21,
    "focus": "Python + SQL Lock",
    "topic": "SQL",
    "subtopic": "Check",
    "task": "Full SQL revision",
    "id": 49
  },
  {
    "day": 21,
    "focus": "Python + SQL Lock",
    "topic": "SQL",
    "subtopic": "Check",
    "task": "Identify weak patterns.",
    "id": 50
  },
  {
    "day": 22,
    "focus": "Python + SQL Lock",
    "topic": "SQL",
    "subtopic": "Intensive",
    "task": "15 SQL problems daily (75 total)",
    "id": 51
  },
  {
    "day": 22,
    "focus": "Python + SQL Lock",
    "topic": "SQL",
    "subtopic": "Intensive",
    "task": "Practice complex filters.",
    "id": 52
  },
  {
    "day": 23,
    "focus": "Python + SQL Lock",
    "topic": "SQL",
    "subtopic": "Intensive",
    "task": "15 SQL problems daily (75 total)",
    "id": 53
  },
  {
    "day": 23,
    "focus": "Python + SQL Lock",
    "topic": "SQL",
    "subtopic": "Intensive",
    "task": "Practice complex filters.",
    "id": 54
  },
  {
    "day": 24,
    "focus": "Python + SQL Lock",
    "topic": "SQL",
    "subtopic": "Intensive",
    "task": "15 SQL problems daily (75 total)",
    "id": 55
  },
  {
    "day": 24,
    "focus": "Python + SQL Lock",
    "topic": "SQL",
    "subtopic": "Intensive",
    "task": "Practice complex filters.",
    "id": 56
  },
  {
    "day": 25,
    "focus": "Python + SQL Lock",
    "topic": "SQL",
    "subtopic": "Intensive",
    "task": "15 SQL problems daily (75 total)",
    "id": 57
  },
  {
    "day": 25,
    "focus": "Python + SQL Lock",
    "topic": "SQL",
    "subtopic": "Intensive",
    "task": "Practice complex filters.",
    "id": 58
  },
  {
    "day": 26,
    "focus": "Python + SQL Lock",
    "topic": "SQL",
    "subtopic": "Intensive",
    "task": "15 SQL problems daily (75 total)",
    "id": 59
  },
  {
    "day": 26,
    "focus": "Python + SQL Lock",
    "topic": "SQL",
    "subtopic": "Intensive",
    "task": "Practice complex filters.",
    "id": 60
  },
  {
    "day": 27,
    "focus": "Python + SQL Lock",
    "topic": "SQL",
    "subtopic": "Mock",
    "task": "SQL Mock test (timed)",
    "id": 61
  },
  {
    "day": 27,
    "focus": "Python + SQL Lock",
    "topic": "SQL",
    "subtopic": "Mock",
    "task": "Review all day 1-27 topics.",
    "id": 62
  },
  {
    "day": 28,
    "focus": "Python + SQL Lock",
    "topic": "SQL",
    "subtopic": "Fix",
    "task": "Debug weak SQL areas",
    "id": 63
  },
  {
    "day": 28,
    "focus": "Python + SQL Lock",
    "topic": "SQL",
    "subtopic": "Fix",
    "task": "Re-solve 10 hard problems.",
    "id": 64
  },
  {
    "day": 29,
    "focus": "Python + SQL Lock",
    "topic": "GitHub",
    "subtopic": "Portfolio",
    "task": "Clean GitHub structure",
    "id": 65
  },
  {
    "day": 29,
    "focus": "Python + SQL Lock",
    "topic": "GitHub",
    "subtopic": "Portfolio",
    "task": "Write clean commit messages.",
    "id": 66
  },
  {
    "day": 30,
    "focus": "Python + SQL Lock",
    "topic": "Check",
    "subtopic": "Milestone",
    "task": "Final SQL test (100 problems complete milestone)",
    "id": 67
  },
  {
    "day": 30,
    "focus": "Python + SQL Lock",
    "topic": "Check",
    "subtopic": "Milestone",
    "task": "Month 1 review.",
    "id": 68
  },
  {
    "day": 31,
    "focus": "Pandas + ML Fundamentals",
    "topic": "NumPy",
    "subtopic": "Arrays",
    "task": "NumPy arrays & operations",
    "id": 69
  },
  {
    "day": 31,
    "focus": "Pandas + ML Fundamentals",
    "topic": "NumPy",
    "subtopic": "Arrays",
    "task": "Performance checks",
    "id": 70
  },
  {
    "day": 31,
    "focus": "Pandas + ML Fundamentals",
    "topic": "NumPy",
    "subtopic": "Arrays",
    "task": "Indexing.",
    "id": 71
  },
  {
    "day": 32,
    "focus": "Pandas + ML Fundamentals",
    "topic": "NumPy",
    "subtopic": "Logic",
    "task": "Broadcasting & indexing",
    "id": 72
  },
  {
    "day": 32,
    "focus": "Pandas + ML Fundamentals",
    "topic": "NumPy",
    "subtopic": "Logic",
    "task": "Vectorized logic",
    "id": 73
  },
  {
    "day": 32,
    "focus": "Pandas + ML Fundamentals",
    "topic": "NumPy",
    "subtopic": "Logic",
    "task": "Multi-dim slicing.",
    "id": 74
  },
  {
    "day": 33,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Pandas",
    "subtopic": "IO",
    "task": "Pandas DataFrame basics",
    "id": 75
  },
  {
    "day": 33,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Pandas",
    "subtopic": "IO",
    "task": "Read CSV, Excel, SQL",
    "id": 76
  },
  {
    "day": 33,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Pandas",
    "subtopic": "IO",
    "task": "head, tail, info.",
    "id": 77
  },
  {
    "day": 34,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Pandas",
    "subtopic": "Cleaning",
    "task": "Data cleaning (missing values)",
    "id": 78
  },
  {
    "day": 34,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Pandas",
    "subtopic": "Cleaning",
    "task": "fillna, dropna, interpolate",
    "id": 79
  },
  {
    "day": 34,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Pandas",
    "subtopic": "Cleaning",
    "task": "Type conversion.",
    "id": 80
  },
  {
    "day": 35,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Pandas",
    "subtopic": "FE",
    "task": "Feature engineering",
    "id": 81
  },
  {
    "day": 35,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Pandas",
    "subtopic": "FE",
    "task": "Creating new features",
    "id": 82
  },
  {
    "day": 35,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Pandas",
    "subtopic": "FE",
    "task": "Binning",
    "id": 83
  },
  {
    "day": 35,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Pandas",
    "subtopic": "FE",
    "task": "Dummies.",
    "id": 84
  },
  {
    "day": 36,
    "focus": "Pandas + ML Fundamentals",
    "topic": "EDA",
    "subtopic": "Analysis",
    "task": "EDA (grouping, summary stats)",
    "id": 85
  },
  {
    "day": 36,
    "focus": "Pandas + ML Fundamentals",
    "topic": "EDA",
    "subtopic": "Analysis",
    "task": "Pivot tables",
    "id": 86
  },
  {
    "day": 36,
    "focus": "Pandas + ML Fundamentals",
    "topic": "EDA",
    "subtopic": "Analysis",
    "task": "Crosstab logic.",
    "id": 87
  },
  {
    "day": 37,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Visualization",
    "subtopic": "Basics",
    "task": "Visualization (Matplotlib)",
    "id": 88
  },
  {
    "day": 37,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Visualization",
    "subtopic": "Basics",
    "task": "Line charts",
    "id": 89
  },
  {
    "day": 37,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Visualization",
    "subtopic": "Basics",
    "task": "Bar plots",
    "id": 90
  },
  {
    "day": 37,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Visualization",
    "subtopic": "Basics",
    "task": "Customizing axes.",
    "id": 91
  },
  {
    "day": 38,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Visualization",
    "subtopic": "Advanced",
    "task": "Seaborn plots",
    "id": 92
  },
  {
    "day": 38,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Visualization",
    "subtopic": "Advanced",
    "task": "Heatmaps",
    "id": 93
  },
  {
    "day": 38,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Visualization",
    "subtopic": "Advanced",
    "task": "Jointplots",
    "id": 94
  },
  {
    "day": 38,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Visualization",
    "subtopic": "Advanced",
    "task": "Pairplots",
    "id": 95
  },
  {
    "day": 38,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Visualization",
    "subtopic": "Advanced",
    "task": "Styling.",
    "id": 96
  },
  {
    "day": 39,
    "focus": "Pandas + ML Fundamentals",
    "topic": "ML Theory",
    "subtopic": "Linear",
    "task": "Linear Regression theory",
    "id": 97
  },
  {
    "day": 39,
    "focus": "Pandas + ML Fundamentals",
    "topic": "ML Theory",
    "subtopic": "Linear",
    "task": "OLS math",
    "id": 98
  },
  {
    "day": 39,
    "focus": "Pandas + ML Fundamentals",
    "topic": "ML Theory",
    "subtopic": "Linear",
    "task": "Assumptions check.",
    "id": 99
  },
  {
    "day": 40,
    "focus": "Pandas + ML Fundamentals",
    "topic": "ML Code",
    "subtopic": "Linear",
    "task": "Implement Linear Regression",
    "id": 100
  },
  {
    "day": 40,
    "focus": "Pandas + ML Fundamentals",
    "topic": "ML Code",
    "subtopic": "Linear",
    "task": "Scikit-learn usage",
    "id": 101
  },
  {
    "day": 40,
    "focus": "Pandas + ML Fundamentals",
    "topic": "ML Code",
    "subtopic": "Linear",
    "task": "Model coefficients interpretation.",
    "id": 102
  },
  {
    "day": 41,
    "focus": "Pandas + ML Fundamentals",
    "topic": "ML Theory",
    "subtopic": "Logistic",
    "task": "Logistic Regression theory",
    "id": 103
  },
  {
    "day": 41,
    "focus": "Pandas + ML Fundamentals",
    "topic": "ML Theory",
    "subtopic": "Logistic",
    "task": "Sigmoid function",
    "id": 104
  },
  {
    "day": 41,
    "focus": "Pandas + ML Fundamentals",
    "topic": "ML Theory",
    "subtopic": "Logistic",
    "task": "Log loss.",
    "id": 105
  },
  {
    "day": 42,
    "focus": "Pandas + ML Fundamentals",
    "topic": "ML Code",
    "subtopic": "Logistic",
    "task": "Implement Logistic Regression",
    "id": 106
  },
  {
    "day": 42,
    "focus": "Pandas + ML Fundamentals",
    "topic": "ML Code",
    "subtopic": "Logistic",
    "task": "Binary classification task",
    "id": 107
  },
  {
    "day": 42,
    "focus": "Pandas + ML Fundamentals",
    "topic": "ML Code",
    "subtopic": "Logistic",
    "task": "Thresholding.",
    "id": 108
  },
  {
    "day": 43,
    "focus": "Pandas + ML Fundamentals",
    "topic": "ML Metrics",
    "subtopic": "Score",
    "task": "Metrics (precision, recall, F1, ROC)",
    "id": 109
  },
  {
    "day": 43,
    "focus": "Pandas + ML Fundamentals",
    "topic": "ML Metrics",
    "subtopic": "Score",
    "task": "Confusion matrix analysis.",
    "id": 110
  },
  {
    "day": 44,
    "focus": "Pandas + ML Fundamentals",
    "topic": "ML Stats",
    "subtopic": "Validate",
    "task": "Cross-validation",
    "id": 111
  },
  {
    "day": 44,
    "focus": "Pandas + ML Fundamentals",
    "topic": "ML Stats",
    "subtopic": "Validate",
    "task": "K-fold logic",
    "id": 112
  },
  {
    "day": 44,
    "focus": "Pandas + ML Fundamentals",
    "topic": "ML Stats",
    "subtopic": "Validate",
    "task": "Stratification.",
    "id": 113
  },
  {
    "day": 45,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Algorithms",
    "subtopic": "Tree",
    "task": "Decision Trees",
    "id": 114
  },
  {
    "day": 45,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Algorithms",
    "subtopic": "Tree",
    "task": "Splitting criteria (Gini, Entropy)",
    "id": 115
  },
  {
    "day": 45,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Algorithms",
    "subtopic": "Tree",
    "task": "Pruning.",
    "id": 116
  },
  {
    "day": 46,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Algorithms",
    "subtopic": "Ensemble",
    "task": "Random Forest",
    "id": 117
  },
  {
    "day": 46,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Algorithms",
    "subtopic": "Ensemble",
    "task": "Bagging",
    "id": 118
  },
  {
    "day": 46,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Algorithms",
    "subtopic": "Ensemble",
    "task": "Feature importance.",
    "id": 119
  },
  {
    "day": 47,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Algorithms",
    "subtopic": "Boost",
    "task": "XGBoost basics",
    "id": 120
  },
  {
    "day": 47,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Algorithms",
    "subtopic": "Boost",
    "task": "Boosting logic vs Bagging.",
    "id": 121
  },
  {
    "day": 48,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Project",
    "subtopic": "Reg",
    "task": "Build Regression Project (Day 1/5)",
    "id": 122
  },
  {
    "day": 48,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Project",
    "subtopic": "Reg",
    "task": "Cleaning",
    "id": 123
  },
  {
    "day": 48,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Project",
    "subtopic": "Reg",
    "task": "Training",
    "id": 124
  },
  {
    "day": 48,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Project",
    "subtopic": "Reg",
    "task": "Evaluation.",
    "id": 125
  },
  {
    "day": 49,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Project",
    "subtopic": "Reg",
    "task": "Build Regression Project (Day 2/5)",
    "id": 126
  },
  {
    "day": 49,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Project",
    "subtopic": "Reg",
    "task": "Cleaning",
    "id": 127
  },
  {
    "day": 49,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Project",
    "subtopic": "Reg",
    "task": "Training",
    "id": 128
  },
  {
    "day": 49,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Project",
    "subtopic": "Reg",
    "task": "Evaluation.",
    "id": 129
  },
  {
    "day": 50,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Project",
    "subtopic": "Reg",
    "task": "Build Regression Project (Day 3/5)",
    "id": 130
  },
  {
    "day": 50,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Project",
    "subtopic": "Reg",
    "task": "Cleaning",
    "id": 131
  },
  {
    "day": 50,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Project",
    "subtopic": "Reg",
    "task": "Training",
    "id": 132
  },
  {
    "day": 50,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Project",
    "subtopic": "Reg",
    "task": "Evaluation.",
    "id": 133
  },
  {
    "day": 51,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Project",
    "subtopic": "Reg",
    "task": "Build Regression Project (Day 4/5)",
    "id": 134
  },
  {
    "day": 51,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Project",
    "subtopic": "Reg",
    "task": "Cleaning",
    "id": 135
  },
  {
    "day": 51,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Project",
    "subtopic": "Reg",
    "task": "Training",
    "id": 136
  },
  {
    "day": 51,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Project",
    "subtopic": "Reg",
    "task": "Evaluation.",
    "id": 137
  },
  {
    "day": 52,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Project",
    "subtopic": "Reg",
    "task": "Build Regression Project (Day 5/5)",
    "id": 138
  },
  {
    "day": 52,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Project",
    "subtopic": "Reg",
    "task": "Cleaning",
    "id": 139
  },
  {
    "day": 52,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Project",
    "subtopic": "Reg",
    "task": "Training",
    "id": 140
  },
  {
    "day": 52,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Project",
    "subtopic": "Reg",
    "task": "Evaluation.",
    "id": 141
  },
  {
    "day": 53,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Project",
    "subtopic": "Class",
    "task": "Build Classification Project (Day 1/5)",
    "id": 142
  },
  {
    "day": 53,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Project",
    "subtopic": "Class",
    "task": "Imbalance",
    "id": 143
  },
  {
    "day": 53,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Project",
    "subtopic": "Class",
    "task": "Metrics",
    "id": 144
  },
  {
    "day": 53,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Project",
    "subtopic": "Class",
    "task": "Optimization.",
    "id": 145
  },
  {
    "day": 54,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Project",
    "subtopic": "Class",
    "task": "Build Classification Project (Day 2/5)",
    "id": 146
  },
  {
    "day": 54,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Project",
    "subtopic": "Class",
    "task": "Imbalance",
    "id": 147
  },
  {
    "day": 54,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Project",
    "subtopic": "Class",
    "task": "Metrics",
    "id": 148
  },
  {
    "day": 54,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Project",
    "subtopic": "Class",
    "task": "Optimization.",
    "id": 149
  },
  {
    "day": 55,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Project",
    "subtopic": "Class",
    "task": "Build Classification Project (Day 3/5)",
    "id": 150
  },
  {
    "day": 55,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Project",
    "subtopic": "Class",
    "task": "Imbalance",
    "id": 151
  },
  {
    "day": 55,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Project",
    "subtopic": "Class",
    "task": "Metrics",
    "id": 152
  },
  {
    "day": 55,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Project",
    "subtopic": "Class",
    "task": "Optimization.",
    "id": 153
  },
  {
    "day": 56,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Project",
    "subtopic": "Class",
    "task": "Build Classification Project (Day 4/5)",
    "id": 154
  },
  {
    "day": 56,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Project",
    "subtopic": "Class",
    "task": "Imbalance",
    "id": 155
  },
  {
    "day": 56,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Project",
    "subtopic": "Class",
    "task": "Metrics",
    "id": 156
  },
  {
    "day": 56,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Project",
    "subtopic": "Class",
    "task": "Optimization.",
    "id": 157
  },
  {
    "day": 57,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Project",
    "subtopic": "Class",
    "task": "Build Classification Project (Day 5/5)",
    "id": 158
  },
  {
    "day": 57,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Project",
    "subtopic": "Class",
    "task": "Imbalance",
    "id": 159
  },
  {
    "day": 57,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Project",
    "subtopic": "Class",
    "task": "Metrics",
    "id": 160
  },
  {
    "day": 57,
    "focus": "Pandas + ML Fundamentals",
    "topic": "Project",
    "subtopic": "Class",
    "task": "Optimization.",
    "id": 161
  },
  {
    "day": 58,
    "focus": "Pandas + ML Fundamentals",
    "topic": "GitHub",
    "subtopic": "Docs",
    "task": "Improve documentation",
    "id": 162
  },
  {
    "day": 58,
    "focus": "Pandas + ML Fundamentals",
    "topic": "GitHub",
    "subtopic": "Docs",
    "task": "GitHub polish",
    "id": 163
  },
  {
    "day": 58,
    "focus": "Pandas + ML Fundamentals",
    "topic": "GitHub",
    "subtopic": "Docs",
    "task": "Write high-quality README.",
    "id": 164
  },
  {
    "day": 59,
    "focus": "Pandas + ML Fundamentals",
    "topic": "GitHub",
    "subtopic": "Docs",
    "task": "Improve documentation",
    "id": 165
  },
  {
    "day": 59,
    "focus": "Pandas + ML Fundamentals",
    "topic": "GitHub",
    "subtopic": "Docs",
    "task": "GitHub polish",
    "id": 166
  },
  {
    "day": 59,
    "focus": "Pandas + ML Fundamentals",
    "topic": "GitHub",
    "subtopic": "Docs",
    "task": "Write high-quality README.",
    "id": 167
  },
  {
    "day": 60,
    "focus": "Pandas + ML Fundamentals",
    "topic": "GitHub",
    "subtopic": "Docs",
    "task": "Improve documentation",
    "id": 168
  },
  {
    "day": 60,
    "focus": "Pandas + ML Fundamentals",
    "topic": "GitHub",
    "subtopic": "Docs",
    "task": "GitHub polish",
    "id": 169
  },
  {
    "day": 60,
    "focus": "Pandas + ML Fundamentals",
    "topic": "GitHub",
    "subtopic": "Docs",
    "task": "Write high-quality README.",
    "id": 170
  },
  {
    "day": 61,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Tensors",
    "id": 171
  },
  {
    "day": 61,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Autograd",
    "id": 172
  },
  {
    "day": 61,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Training loop",
    "id": 173
  },
  {
    "day": 61,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Loss functions",
    "id": 174
  },
  {
    "day": 61,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Optimizers",
    "id": 175
  },
  {
    "day": 61,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Custom Dataset class",
    "id": 176
  },
  {
    "day": 61,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "CNN basics",
    "id": 177
  },
  {
    "day": 61,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Model saving/loading",
    "id": 178
  },
  {
    "day": 61,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "FastAPI basics",
    "id": 179
  },
  {
    "day": 61,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Create inference endpoint",
    "id": 180
  },
  {
    "day": 61,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Connect model.",
    "id": 181
  },
  {
    "day": 62,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Tensors",
    "id": 182
  },
  {
    "day": 62,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Autograd",
    "id": 183
  },
  {
    "day": 62,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Training loop",
    "id": 184
  },
  {
    "day": 62,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Loss functions",
    "id": 185
  },
  {
    "day": 62,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Optimizers",
    "id": 186
  },
  {
    "day": 62,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Custom Dataset class",
    "id": 187
  },
  {
    "day": 62,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "CNN basics",
    "id": 188
  },
  {
    "day": 62,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Model saving/loading",
    "id": 189
  },
  {
    "day": 62,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "FastAPI basics",
    "id": 190
  },
  {
    "day": 62,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Create inference endpoint",
    "id": 191
  },
  {
    "day": 62,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Connect model.",
    "id": 192
  },
  {
    "day": 63,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Tensors",
    "id": 193
  },
  {
    "day": 63,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Autograd",
    "id": 194
  },
  {
    "day": 63,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Training loop",
    "id": 195
  },
  {
    "day": 63,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Loss functions",
    "id": 196
  },
  {
    "day": 63,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Optimizers",
    "id": 197
  },
  {
    "day": 63,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Custom Dataset class",
    "id": 198
  },
  {
    "day": 63,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "CNN basics",
    "id": 199
  },
  {
    "day": 63,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Model saving/loading",
    "id": 200
  },
  {
    "day": 63,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "FastAPI basics",
    "id": 201
  },
  {
    "day": 63,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Create inference endpoint",
    "id": 202
  },
  {
    "day": 63,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Connect model.",
    "id": 203
  },
  {
    "day": 64,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Tensors",
    "id": 204
  },
  {
    "day": 64,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Autograd",
    "id": 205
  },
  {
    "day": 64,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Training loop",
    "id": 206
  },
  {
    "day": 64,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Loss functions",
    "id": 207
  },
  {
    "day": 64,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Optimizers",
    "id": 208
  },
  {
    "day": 64,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Custom Dataset class",
    "id": 209
  },
  {
    "day": 64,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "CNN basics",
    "id": 210
  },
  {
    "day": 64,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Model saving/loading",
    "id": 211
  },
  {
    "day": 64,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "FastAPI basics",
    "id": 212
  },
  {
    "day": 64,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Create inference endpoint",
    "id": 213
  },
  {
    "day": 64,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Connect model.",
    "id": 214
  },
  {
    "day": 65,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Tensors",
    "id": 215
  },
  {
    "day": 65,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Autograd",
    "id": 216
  },
  {
    "day": 65,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Training loop",
    "id": 217
  },
  {
    "day": 65,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Loss functions",
    "id": 218
  },
  {
    "day": 65,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Optimizers",
    "id": 219
  },
  {
    "day": 65,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Custom Dataset class",
    "id": 220
  },
  {
    "day": 65,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "CNN basics",
    "id": 221
  },
  {
    "day": 65,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Model saving/loading",
    "id": 222
  },
  {
    "day": 65,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "FastAPI basics",
    "id": 223
  },
  {
    "day": 65,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Create inference endpoint",
    "id": 224
  },
  {
    "day": 65,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Connect model.",
    "id": 225
  },
  {
    "day": 66,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Tensors",
    "id": 226
  },
  {
    "day": 66,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Autograd",
    "id": 227
  },
  {
    "day": 66,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Training loop",
    "id": 228
  },
  {
    "day": 66,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Loss functions",
    "id": 229
  },
  {
    "day": 66,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Optimizers",
    "id": 230
  },
  {
    "day": 66,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Custom Dataset class",
    "id": 231
  },
  {
    "day": 66,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "CNN basics",
    "id": 232
  },
  {
    "day": 66,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Model saving/loading",
    "id": 233
  },
  {
    "day": 66,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "FastAPI basics",
    "id": 234
  },
  {
    "day": 66,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Create inference endpoint",
    "id": 235
  },
  {
    "day": 66,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Connect model.",
    "id": 236
  },
  {
    "day": 67,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Tensors",
    "id": 237
  },
  {
    "day": 67,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Autograd",
    "id": 238
  },
  {
    "day": 67,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Training loop",
    "id": 239
  },
  {
    "day": 67,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Loss functions",
    "id": 240
  },
  {
    "day": 67,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Optimizers",
    "id": 241
  },
  {
    "day": 67,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Custom Dataset class",
    "id": 242
  },
  {
    "day": 67,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "CNN basics",
    "id": 243
  },
  {
    "day": 67,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Model saving/loading",
    "id": 244
  },
  {
    "day": 67,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "FastAPI basics",
    "id": 245
  },
  {
    "day": 67,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Create inference endpoint",
    "id": 246
  },
  {
    "day": 67,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Connect model.",
    "id": 247
  },
  {
    "day": 68,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Tensors",
    "id": 248
  },
  {
    "day": 68,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Autograd",
    "id": 249
  },
  {
    "day": 68,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Training loop",
    "id": 250
  },
  {
    "day": 68,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Loss functions",
    "id": 251
  },
  {
    "day": 68,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Optimizers",
    "id": 252
  },
  {
    "day": 68,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Custom Dataset class",
    "id": 253
  },
  {
    "day": 68,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "CNN basics",
    "id": 254
  },
  {
    "day": 68,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Model saving/loading",
    "id": 255
  },
  {
    "day": 68,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "FastAPI basics",
    "id": 256
  },
  {
    "day": 68,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Create inference endpoint",
    "id": 257
  },
  {
    "day": 68,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Connect model.",
    "id": 258
  },
  {
    "day": 69,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Tensors",
    "id": 259
  },
  {
    "day": 69,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Autograd",
    "id": 260
  },
  {
    "day": 69,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Training loop",
    "id": 261
  },
  {
    "day": 69,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Loss functions",
    "id": 262
  },
  {
    "day": 69,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Optimizers",
    "id": 263
  },
  {
    "day": 69,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Custom Dataset class",
    "id": 264
  },
  {
    "day": 69,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "CNN basics",
    "id": 265
  },
  {
    "day": 69,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Model saving/loading",
    "id": 266
  },
  {
    "day": 69,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "FastAPI basics",
    "id": 267
  },
  {
    "day": 69,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Create inference endpoint",
    "id": 268
  },
  {
    "day": 69,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Connect model.",
    "id": 269
  },
  {
    "day": 70,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Tensors",
    "id": 270
  },
  {
    "day": 70,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Autograd",
    "id": 271
  },
  {
    "day": 70,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Training loop",
    "id": 272
  },
  {
    "day": 70,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Loss functions",
    "id": 273
  },
  {
    "day": 70,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Optimizers",
    "id": 274
  },
  {
    "day": 70,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Custom Dataset class",
    "id": 275
  },
  {
    "day": 70,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "CNN basics",
    "id": 276
  },
  {
    "day": 70,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Model saving/loading",
    "id": 277
  },
  {
    "day": 70,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "FastAPI basics",
    "id": 278
  },
  {
    "day": 70,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Create inference endpoint",
    "id": 279
  },
  {
    "day": 70,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Connect model.",
    "id": 280
  },
  {
    "day": 71,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Tensors",
    "id": 281
  },
  {
    "day": 71,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Autograd",
    "id": 282
  },
  {
    "day": 71,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Training loop",
    "id": 283
  },
  {
    "day": 71,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Loss functions",
    "id": 284
  },
  {
    "day": 71,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Optimizers",
    "id": 285
  },
  {
    "day": 71,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Custom Dataset class",
    "id": 286
  },
  {
    "day": 71,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "CNN basics",
    "id": 287
  },
  {
    "day": 71,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Model saving/loading",
    "id": 288
  },
  {
    "day": 71,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "FastAPI basics",
    "id": 289
  },
  {
    "day": 71,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Create inference endpoint",
    "id": 290
  },
  {
    "day": 71,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Connect model.",
    "id": 291
  },
  {
    "day": 72,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Tensors",
    "id": 292
  },
  {
    "day": 72,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Autograd",
    "id": 293
  },
  {
    "day": 72,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Training loop",
    "id": 294
  },
  {
    "day": 72,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Loss functions",
    "id": 295
  },
  {
    "day": 72,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Optimizers",
    "id": 296
  },
  {
    "day": 72,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Custom Dataset class",
    "id": 297
  },
  {
    "day": 72,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "CNN basics",
    "id": 298
  },
  {
    "day": 72,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Model saving/loading",
    "id": 299
  },
  {
    "day": 72,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "FastAPI basics",
    "id": 300
  },
  {
    "day": 72,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Create inference endpoint",
    "id": 301
  },
  {
    "day": 72,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Connect model.",
    "id": 302
  },
  {
    "day": 73,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Tensors",
    "id": 303
  },
  {
    "day": 73,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Autograd",
    "id": 304
  },
  {
    "day": 73,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Training loop",
    "id": 305
  },
  {
    "day": 73,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Loss functions",
    "id": 306
  },
  {
    "day": 73,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Optimizers",
    "id": 307
  },
  {
    "day": 73,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Custom Dataset class",
    "id": 308
  },
  {
    "day": 73,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "CNN basics",
    "id": 309
  },
  {
    "day": 73,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Model saving/loading",
    "id": 310
  },
  {
    "day": 73,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "FastAPI basics",
    "id": 311
  },
  {
    "day": 73,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Create inference endpoint",
    "id": 312
  },
  {
    "day": 73,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Connect model.",
    "id": 313
  },
  {
    "day": 74,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Tensors",
    "id": 314
  },
  {
    "day": 74,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Autograd",
    "id": 315
  },
  {
    "day": 74,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Training loop",
    "id": 316
  },
  {
    "day": 74,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Loss functions",
    "id": 317
  },
  {
    "day": 74,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Optimizers",
    "id": 318
  },
  {
    "day": 74,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Custom Dataset class",
    "id": 319
  },
  {
    "day": 74,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "CNN basics",
    "id": 320
  },
  {
    "day": 74,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Model saving/loading",
    "id": 321
  },
  {
    "day": 74,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "FastAPI basics",
    "id": 322
  },
  {
    "day": 74,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Create inference endpoint",
    "id": 323
  },
  {
    "day": 74,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Connect model.",
    "id": 324
  },
  {
    "day": 75,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Tensors",
    "id": 325
  },
  {
    "day": 75,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Autograd",
    "id": 326
  },
  {
    "day": 75,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Training loop",
    "id": 327
  },
  {
    "day": 75,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Loss functions",
    "id": 328
  },
  {
    "day": 75,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Optimizers",
    "id": 329
  },
  {
    "day": 75,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Custom Dataset class",
    "id": 330
  },
  {
    "day": 75,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "CNN basics",
    "id": 331
  },
  {
    "day": 75,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Model saving/loading",
    "id": 332
  },
  {
    "day": 75,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "FastAPI basics",
    "id": 333
  },
  {
    "day": 75,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Create inference endpoint",
    "id": 334
  },
  {
    "day": 75,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Connect model.",
    "id": 335
  },
  {
    "day": 76,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Tensors",
    "id": 336
  },
  {
    "day": 76,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Autograd",
    "id": 337
  },
  {
    "day": 76,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Training loop",
    "id": 338
  },
  {
    "day": 76,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Loss functions",
    "id": 339
  },
  {
    "day": 76,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Optimizers",
    "id": 340
  },
  {
    "day": 76,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Custom Dataset class",
    "id": 341
  },
  {
    "day": 76,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "CNN basics",
    "id": 342
  },
  {
    "day": 76,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Model saving/loading",
    "id": 343
  },
  {
    "day": 76,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "FastAPI basics",
    "id": 344
  },
  {
    "day": 76,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Create inference endpoint",
    "id": 345
  },
  {
    "day": 76,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Connect model.",
    "id": 346
  },
  {
    "day": 77,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Tensors",
    "id": 347
  },
  {
    "day": 77,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Autograd",
    "id": 348
  },
  {
    "day": 77,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Training loop",
    "id": 349
  },
  {
    "day": 77,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Loss functions",
    "id": 350
  },
  {
    "day": 77,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Optimizers",
    "id": 351
  },
  {
    "day": 77,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Custom Dataset class",
    "id": 352
  },
  {
    "day": 77,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "CNN basics",
    "id": 353
  },
  {
    "day": 77,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Model saving/loading",
    "id": 354
  },
  {
    "day": 77,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "FastAPI basics",
    "id": 355
  },
  {
    "day": 77,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Create inference endpoint",
    "id": 356
  },
  {
    "day": 77,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Connect model.",
    "id": 357
  },
  {
    "day": 78,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Tensors",
    "id": 358
  },
  {
    "day": 78,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Autograd",
    "id": 359
  },
  {
    "day": 78,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Training loop",
    "id": 360
  },
  {
    "day": 78,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Loss functions",
    "id": 361
  },
  {
    "day": 78,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Optimizers",
    "id": 362
  },
  {
    "day": 78,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Custom Dataset class",
    "id": 363
  },
  {
    "day": 78,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "CNN basics",
    "id": 364
  },
  {
    "day": 78,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Model saving/loading",
    "id": 365
  },
  {
    "day": 78,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "FastAPI basics",
    "id": 366
  },
  {
    "day": 78,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Create inference endpoint",
    "id": 367
  },
  {
    "day": 78,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Connect model.",
    "id": 368
  },
  {
    "day": 79,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Tensors",
    "id": 369
  },
  {
    "day": 79,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Autograd",
    "id": 370
  },
  {
    "day": 79,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Training loop",
    "id": 371
  },
  {
    "day": 79,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Loss functions",
    "id": 372
  },
  {
    "day": 79,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Optimizers",
    "id": 373
  },
  {
    "day": 79,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Custom Dataset class",
    "id": 374
  },
  {
    "day": 79,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "CNN basics",
    "id": 375
  },
  {
    "day": 79,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Model saving/loading",
    "id": 376
  },
  {
    "day": 79,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "FastAPI basics",
    "id": 377
  },
  {
    "day": 79,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Create inference endpoint",
    "id": 378
  },
  {
    "day": 79,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Connect model.",
    "id": 379
  },
  {
    "day": 80,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Tensors",
    "id": 380
  },
  {
    "day": 80,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Autograd",
    "id": 381
  },
  {
    "day": 80,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Training loop",
    "id": 382
  },
  {
    "day": 80,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Loss functions",
    "id": 383
  },
  {
    "day": 80,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Optimizers",
    "id": 384
  },
  {
    "day": 80,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Custom Dataset class",
    "id": 385
  },
  {
    "day": 80,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "CNN basics",
    "id": 386
  },
  {
    "day": 80,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Model saving/loading",
    "id": 387
  },
  {
    "day": 80,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "FastAPI basics",
    "id": 388
  },
  {
    "day": 80,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Create inference endpoint",
    "id": 389
  },
  {
    "day": 80,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Connect model.",
    "id": 390
  },
  {
    "day": 81,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Tensors",
    "id": 391
  },
  {
    "day": 81,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Autograd",
    "id": 392
  },
  {
    "day": 81,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Training loop",
    "id": 393
  },
  {
    "day": 81,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Loss functions",
    "id": 394
  },
  {
    "day": 81,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Optimizers",
    "id": 395
  },
  {
    "day": 81,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Custom Dataset class",
    "id": 396
  },
  {
    "day": 81,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "CNN basics",
    "id": 397
  },
  {
    "day": 81,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Model saving/loading",
    "id": 398
  },
  {
    "day": 81,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "FastAPI basics",
    "id": 399
  },
  {
    "day": 81,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Create inference endpoint",
    "id": 400
  },
  {
    "day": 81,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Connect model.",
    "id": 401
  },
  {
    "day": 82,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Tensors",
    "id": 402
  },
  {
    "day": 82,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Autograd",
    "id": 403
  },
  {
    "day": 82,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Training loop",
    "id": 404
  },
  {
    "day": 82,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Loss functions",
    "id": 405
  },
  {
    "day": 82,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Optimizers",
    "id": 406
  },
  {
    "day": 82,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Custom Dataset class",
    "id": 407
  },
  {
    "day": 82,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "CNN basics",
    "id": 408
  },
  {
    "day": 82,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Model saving/loading",
    "id": 409
  },
  {
    "day": 82,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "FastAPI basics",
    "id": 410
  },
  {
    "day": 82,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Create inference endpoint",
    "id": 411
  },
  {
    "day": 82,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Connect model.",
    "id": 412
  },
  {
    "day": 83,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Tensors",
    "id": 413
  },
  {
    "day": 83,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Autograd",
    "id": 414
  },
  {
    "day": 83,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Training loop",
    "id": 415
  },
  {
    "day": 83,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Loss functions",
    "id": 416
  },
  {
    "day": 83,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Optimizers",
    "id": 417
  },
  {
    "day": 83,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Custom Dataset class",
    "id": 418
  },
  {
    "day": 83,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "CNN basics",
    "id": 419
  },
  {
    "day": 83,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Model saving/loading",
    "id": 420
  },
  {
    "day": 83,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "FastAPI basics",
    "id": 421
  },
  {
    "day": 83,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Create inference endpoint",
    "id": 422
  },
  {
    "day": 83,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Connect model.",
    "id": 423
  },
  {
    "day": 84,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Tensors",
    "id": 424
  },
  {
    "day": 84,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Autograd",
    "id": 425
  },
  {
    "day": 84,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Training loop",
    "id": 426
  },
  {
    "day": 84,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Loss functions",
    "id": 427
  },
  {
    "day": 84,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Optimizers",
    "id": 428
  },
  {
    "day": 84,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Custom Dataset class",
    "id": 429
  },
  {
    "day": 84,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "CNN basics",
    "id": 430
  },
  {
    "day": 84,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Model saving/loading",
    "id": 431
  },
  {
    "day": 84,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "FastAPI basics",
    "id": 432
  },
  {
    "day": 84,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Create inference endpoint",
    "id": 433
  },
  {
    "day": 84,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Connect model.",
    "id": 434
  },
  {
    "day": 85,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Tensors",
    "id": 435
  },
  {
    "day": 85,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Autograd",
    "id": 436
  },
  {
    "day": 85,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Training loop",
    "id": 437
  },
  {
    "day": 85,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Loss functions",
    "id": 438
  },
  {
    "day": 85,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Optimizers",
    "id": 439
  },
  {
    "day": 85,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Custom Dataset class",
    "id": 440
  },
  {
    "day": 85,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "CNN basics",
    "id": 441
  },
  {
    "day": 85,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Model saving/loading",
    "id": 442
  },
  {
    "day": 85,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "FastAPI basics",
    "id": 443
  },
  {
    "day": 85,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Create inference endpoint",
    "id": 444
  },
  {
    "day": 85,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Connect model.",
    "id": 445
  },
  {
    "day": 86,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Tensors",
    "id": 446
  },
  {
    "day": 86,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Autograd",
    "id": 447
  },
  {
    "day": 86,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Training loop",
    "id": 448
  },
  {
    "day": 86,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Loss functions",
    "id": 449
  },
  {
    "day": 86,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Optimizers",
    "id": 450
  },
  {
    "day": 86,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Custom Dataset class",
    "id": 451
  },
  {
    "day": 86,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "CNN basics",
    "id": 452
  },
  {
    "day": 86,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Model saving/loading",
    "id": 453
  },
  {
    "day": 86,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "FastAPI basics",
    "id": 454
  },
  {
    "day": 86,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Create inference endpoint",
    "id": 455
  },
  {
    "day": 86,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Connect model.",
    "id": 456
  },
  {
    "day": 87,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Tensors",
    "id": 457
  },
  {
    "day": 87,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Autograd",
    "id": 458
  },
  {
    "day": 87,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Training loop",
    "id": 459
  },
  {
    "day": 87,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Loss functions",
    "id": 460
  },
  {
    "day": 87,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Optimizers",
    "id": 461
  },
  {
    "day": 87,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Custom Dataset class",
    "id": 462
  },
  {
    "day": 87,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "CNN basics",
    "id": 463
  },
  {
    "day": 87,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Model saving/loading",
    "id": 464
  },
  {
    "day": 87,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "FastAPI basics",
    "id": 465
  },
  {
    "day": 87,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Create inference endpoint",
    "id": 466
  },
  {
    "day": 87,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Connect model.",
    "id": 467
  },
  {
    "day": 88,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Tensors",
    "id": 468
  },
  {
    "day": 88,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Autograd",
    "id": 469
  },
  {
    "day": 88,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Training loop",
    "id": 470
  },
  {
    "day": 88,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Loss functions",
    "id": 471
  },
  {
    "day": 88,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Optimizers",
    "id": 472
  },
  {
    "day": 88,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Custom Dataset class",
    "id": 473
  },
  {
    "day": 88,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "CNN basics",
    "id": 474
  },
  {
    "day": 88,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Model saving/loading",
    "id": 475
  },
  {
    "day": 88,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "FastAPI basics",
    "id": 476
  },
  {
    "day": 88,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Create inference endpoint",
    "id": 477
  },
  {
    "day": 88,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Connect model.",
    "id": 478
  },
  {
    "day": 89,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Tensors",
    "id": 479
  },
  {
    "day": 89,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Autograd",
    "id": 480
  },
  {
    "day": 89,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Training loop",
    "id": 481
  },
  {
    "day": 89,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Loss functions",
    "id": 482
  },
  {
    "day": 89,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Optimizers",
    "id": 483
  },
  {
    "day": 89,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Custom Dataset class",
    "id": 484
  },
  {
    "day": 89,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "CNN basics",
    "id": 485
  },
  {
    "day": 89,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Model saving/loading",
    "id": 486
  },
  {
    "day": 89,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "FastAPI basics",
    "id": 487
  },
  {
    "day": 89,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Create inference endpoint",
    "id": 488
  },
  {
    "day": 89,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Connect model.",
    "id": 489
  },
  {
    "day": 90,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Tensors",
    "id": 490
  },
  {
    "day": 90,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Autograd",
    "id": 491
  },
  {
    "day": 90,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Training loop",
    "id": 492
  },
  {
    "day": 90,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Loss functions",
    "id": 493
  },
  {
    "day": 90,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Optimizers",
    "id": 494
  },
  {
    "day": 90,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Custom Dataset class",
    "id": 495
  },
  {
    "day": 90,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "CNN basics",
    "id": 496
  },
  {
    "day": 90,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Model saving/loading",
    "id": 497
  },
  {
    "day": 90,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "FastAPI basics",
    "id": 498
  },
  {
    "day": 90,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Create inference endpoint",
    "id": 499
  },
  {
    "day": 90,
    "focus": "PyTorch + DL Project",
    "topic": "DL",
    "subtopic": "Module",
    "task": "Connect model.",
    "id": 500
  },
  {
    "day": 91,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Install Spark",
    "id": 501
  },
  {
    "day": 91,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "RDD vs DataFrame",
    "id": 502
  },
  {
    "day": 91,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Transformations",
    "id": 503
  },
  {
    "day": 91,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Joins & aggregations",
    "id": 504
  },
  {
    "day": 91,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Partitioning",
    "id": 505
  },
  {
    "day": 91,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Large dataset simulation",
    "id": 506
  },
  {
    "day": 91,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "ML training in Spark",
    "id": 507
  },
  {
    "day": 91,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Build ML batch pipeline.",
    "id": 508
  },
  {
    "day": 92,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Install Spark",
    "id": 509
  },
  {
    "day": 92,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "RDD vs DataFrame",
    "id": 510
  },
  {
    "day": 92,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Transformations",
    "id": 511
  },
  {
    "day": 92,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Joins & aggregations",
    "id": 512
  },
  {
    "day": 92,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Partitioning",
    "id": 513
  },
  {
    "day": 92,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Large dataset simulation",
    "id": 514
  },
  {
    "day": 92,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "ML training in Spark",
    "id": 515
  },
  {
    "day": 92,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Build ML batch pipeline.",
    "id": 516
  },
  {
    "day": 93,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Install Spark",
    "id": 517
  },
  {
    "day": 93,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "RDD vs DataFrame",
    "id": 518
  },
  {
    "day": 93,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Transformations",
    "id": 519
  },
  {
    "day": 93,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Joins & aggregations",
    "id": 520
  },
  {
    "day": 93,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Partitioning",
    "id": 521
  },
  {
    "day": 93,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Large dataset simulation",
    "id": 522
  },
  {
    "day": 93,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "ML training in Spark",
    "id": 523
  },
  {
    "day": 93,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Build ML batch pipeline.",
    "id": 524
  },
  {
    "day": 94,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Install Spark",
    "id": 525
  },
  {
    "day": 94,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "RDD vs DataFrame",
    "id": 526
  },
  {
    "day": 94,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Transformations",
    "id": 527
  },
  {
    "day": 94,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Joins & aggregations",
    "id": 528
  },
  {
    "day": 94,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Partitioning",
    "id": 529
  },
  {
    "day": 94,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Large dataset simulation",
    "id": 530
  },
  {
    "day": 94,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "ML training in Spark",
    "id": 531
  },
  {
    "day": 94,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Build ML batch pipeline.",
    "id": 532
  },
  {
    "day": 95,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Install Spark",
    "id": 533
  },
  {
    "day": 95,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "RDD vs DataFrame",
    "id": 534
  },
  {
    "day": 95,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Transformations",
    "id": 535
  },
  {
    "day": 95,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Joins & aggregations",
    "id": 536
  },
  {
    "day": 95,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Partitioning",
    "id": 537
  },
  {
    "day": 95,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Large dataset simulation",
    "id": 538
  },
  {
    "day": 95,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "ML training in Spark",
    "id": 539
  },
  {
    "day": 95,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Build ML batch pipeline.",
    "id": 540
  },
  {
    "day": 96,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Install Spark",
    "id": 541
  },
  {
    "day": 96,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "RDD vs DataFrame",
    "id": 542
  },
  {
    "day": 96,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Transformations",
    "id": 543
  },
  {
    "day": 96,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Joins & aggregations",
    "id": 544
  },
  {
    "day": 96,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Partitioning",
    "id": 545
  },
  {
    "day": 96,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Large dataset simulation",
    "id": 546
  },
  {
    "day": 96,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "ML training in Spark",
    "id": 547
  },
  {
    "day": 96,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Build ML batch pipeline.",
    "id": 548
  },
  {
    "day": 97,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Install Spark",
    "id": 549
  },
  {
    "day": 97,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "RDD vs DataFrame",
    "id": 550
  },
  {
    "day": 97,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Transformations",
    "id": 551
  },
  {
    "day": 97,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Joins & aggregations",
    "id": 552
  },
  {
    "day": 97,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Partitioning",
    "id": 553
  },
  {
    "day": 97,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Large dataset simulation",
    "id": 554
  },
  {
    "day": 97,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "ML training in Spark",
    "id": 555
  },
  {
    "day": 97,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Build ML batch pipeline.",
    "id": 556
  },
  {
    "day": 98,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Install Spark",
    "id": 557
  },
  {
    "day": 98,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "RDD vs DataFrame",
    "id": 558
  },
  {
    "day": 98,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Transformations",
    "id": 559
  },
  {
    "day": 98,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Joins & aggregations",
    "id": 560
  },
  {
    "day": 98,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Partitioning",
    "id": 561
  },
  {
    "day": 98,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Large dataset simulation",
    "id": 562
  },
  {
    "day": 98,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "ML training in Spark",
    "id": 563
  },
  {
    "day": 98,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Build ML batch pipeline.",
    "id": 564
  },
  {
    "day": 99,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Install Spark",
    "id": 565
  },
  {
    "day": 99,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "RDD vs DataFrame",
    "id": 566
  },
  {
    "day": 99,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Transformations",
    "id": 567
  },
  {
    "day": 99,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Joins & aggregations",
    "id": 568
  },
  {
    "day": 99,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Partitioning",
    "id": 569
  },
  {
    "day": 99,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Large dataset simulation",
    "id": 570
  },
  {
    "day": 99,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "ML training in Spark",
    "id": 571
  },
  {
    "day": 99,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Build ML batch pipeline.",
    "id": 572
  },
  {
    "day": 100,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Install Spark",
    "id": 573
  },
  {
    "day": 100,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "RDD vs DataFrame",
    "id": 574
  },
  {
    "day": 100,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Transformations",
    "id": 575
  },
  {
    "day": 100,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Joins & aggregations",
    "id": 576
  },
  {
    "day": 100,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Partitioning",
    "id": 577
  },
  {
    "day": 100,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Large dataset simulation",
    "id": 578
  },
  {
    "day": 100,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "ML training in Spark",
    "id": 579
  },
  {
    "day": 100,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Build ML batch pipeline.",
    "id": 580
  },
  {
    "day": 101,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Install Spark",
    "id": 581
  },
  {
    "day": 101,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "RDD vs DataFrame",
    "id": 582
  },
  {
    "day": 101,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Transformations",
    "id": 583
  },
  {
    "day": 101,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Joins & aggregations",
    "id": 584
  },
  {
    "day": 101,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Partitioning",
    "id": 585
  },
  {
    "day": 101,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Large dataset simulation",
    "id": 586
  },
  {
    "day": 101,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "ML training in Spark",
    "id": 587
  },
  {
    "day": 101,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Build ML batch pipeline.",
    "id": 588
  },
  {
    "day": 102,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Install Spark",
    "id": 589
  },
  {
    "day": 102,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "RDD vs DataFrame",
    "id": 590
  },
  {
    "day": 102,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Transformations",
    "id": 591
  },
  {
    "day": 102,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Joins & aggregations",
    "id": 592
  },
  {
    "day": 102,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Partitioning",
    "id": 593
  },
  {
    "day": 102,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Large dataset simulation",
    "id": 594
  },
  {
    "day": 102,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "ML training in Spark",
    "id": 595
  },
  {
    "day": 102,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Build ML batch pipeline.",
    "id": 596
  },
  {
    "day": 103,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Install Spark",
    "id": 597
  },
  {
    "day": 103,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "RDD vs DataFrame",
    "id": 598
  },
  {
    "day": 103,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Transformations",
    "id": 599
  },
  {
    "day": 103,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Joins & aggregations",
    "id": 600
  },
  {
    "day": 103,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Partitioning",
    "id": 601
  },
  {
    "day": 103,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Large dataset simulation",
    "id": 602
  },
  {
    "day": 103,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "ML training in Spark",
    "id": 603
  },
  {
    "day": 103,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Build ML batch pipeline.",
    "id": 604
  },
  {
    "day": 104,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Install Spark",
    "id": 605
  },
  {
    "day": 104,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "RDD vs DataFrame",
    "id": 606
  },
  {
    "day": 104,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Transformations",
    "id": 607
  },
  {
    "day": 104,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Joins & aggregations",
    "id": 608
  },
  {
    "day": 104,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Partitioning",
    "id": 609
  },
  {
    "day": 104,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Large dataset simulation",
    "id": 610
  },
  {
    "day": 104,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "ML training in Spark",
    "id": 611
  },
  {
    "day": 104,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Build ML batch pipeline.",
    "id": 612
  },
  {
    "day": 105,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Install Spark",
    "id": 613
  },
  {
    "day": 105,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "RDD vs DataFrame",
    "id": 614
  },
  {
    "day": 105,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Transformations",
    "id": 615
  },
  {
    "day": 105,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Joins & aggregations",
    "id": 616
  },
  {
    "day": 105,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Partitioning",
    "id": 617
  },
  {
    "day": 105,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Large dataset simulation",
    "id": 618
  },
  {
    "day": 105,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "ML training in Spark",
    "id": 619
  },
  {
    "day": 105,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Build ML batch pipeline.",
    "id": 620
  },
  {
    "day": 106,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Install Spark",
    "id": 621
  },
  {
    "day": 106,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "RDD vs DataFrame",
    "id": 622
  },
  {
    "day": 106,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Transformations",
    "id": 623
  },
  {
    "day": 106,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Joins & aggregations",
    "id": 624
  },
  {
    "day": 106,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Partitioning",
    "id": 625
  },
  {
    "day": 106,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Large dataset simulation",
    "id": 626
  },
  {
    "day": 106,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "ML training in Spark",
    "id": 627
  },
  {
    "day": 106,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Build ML batch pipeline.",
    "id": 628
  },
  {
    "day": 107,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Install Spark",
    "id": 629
  },
  {
    "day": 107,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "RDD vs DataFrame",
    "id": 630
  },
  {
    "day": 107,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Transformations",
    "id": 631
  },
  {
    "day": 107,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Joins & aggregations",
    "id": 632
  },
  {
    "day": 107,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Partitioning",
    "id": 633
  },
  {
    "day": 107,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Large dataset simulation",
    "id": 634
  },
  {
    "day": 107,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "ML training in Spark",
    "id": 635
  },
  {
    "day": 107,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Build ML batch pipeline.",
    "id": 636
  },
  {
    "day": 108,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Install Spark",
    "id": 637
  },
  {
    "day": 108,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "RDD vs DataFrame",
    "id": 638
  },
  {
    "day": 108,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Transformations",
    "id": 639
  },
  {
    "day": 108,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Joins & aggregations",
    "id": 640
  },
  {
    "day": 108,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Partitioning",
    "id": 641
  },
  {
    "day": 108,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Large dataset simulation",
    "id": 642
  },
  {
    "day": 108,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "ML training in Spark",
    "id": 643
  },
  {
    "day": 108,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Build ML batch pipeline.",
    "id": 644
  },
  {
    "day": 109,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Install Spark",
    "id": 645
  },
  {
    "day": 109,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "RDD vs DataFrame",
    "id": 646
  },
  {
    "day": 109,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Transformations",
    "id": 647
  },
  {
    "day": 109,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Joins & aggregations",
    "id": 648
  },
  {
    "day": 109,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Partitioning",
    "id": 649
  },
  {
    "day": 109,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Large dataset simulation",
    "id": 650
  },
  {
    "day": 109,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "ML training in Spark",
    "id": 651
  },
  {
    "day": 109,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Build ML batch pipeline.",
    "id": 652
  },
  {
    "day": 110,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Install Spark",
    "id": 653
  },
  {
    "day": 110,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "RDD vs DataFrame",
    "id": 654
  },
  {
    "day": 110,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Transformations",
    "id": 655
  },
  {
    "day": 110,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Joins & aggregations",
    "id": 656
  },
  {
    "day": 110,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Partitioning",
    "id": 657
  },
  {
    "day": 110,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Large dataset simulation",
    "id": 658
  },
  {
    "day": 110,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "ML training in Spark",
    "id": 659
  },
  {
    "day": 110,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Build ML batch pipeline.",
    "id": 660
  },
  {
    "day": 111,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Install Spark",
    "id": 661
  },
  {
    "day": 111,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "RDD vs DataFrame",
    "id": 662
  },
  {
    "day": 111,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Transformations",
    "id": 663
  },
  {
    "day": 111,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Joins & aggregations",
    "id": 664
  },
  {
    "day": 111,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Partitioning",
    "id": 665
  },
  {
    "day": 111,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Large dataset simulation",
    "id": 666
  },
  {
    "day": 111,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "ML training in Spark",
    "id": 667
  },
  {
    "day": 111,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Build ML batch pipeline.",
    "id": 668
  },
  {
    "day": 112,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Install Spark",
    "id": 669
  },
  {
    "day": 112,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "RDD vs DataFrame",
    "id": 670
  },
  {
    "day": 112,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Transformations",
    "id": 671
  },
  {
    "day": 112,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Joins & aggregations",
    "id": 672
  },
  {
    "day": 112,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Partitioning",
    "id": 673
  },
  {
    "day": 112,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Large dataset simulation",
    "id": 674
  },
  {
    "day": 112,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "ML training in Spark",
    "id": 675
  },
  {
    "day": 112,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Build ML batch pipeline.",
    "id": 676
  },
  {
    "day": 113,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Install Spark",
    "id": 677
  },
  {
    "day": 113,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "RDD vs DataFrame",
    "id": 678
  },
  {
    "day": 113,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Transformations",
    "id": 679
  },
  {
    "day": 113,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Joins & aggregations",
    "id": 680
  },
  {
    "day": 113,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Partitioning",
    "id": 681
  },
  {
    "day": 113,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Large dataset simulation",
    "id": 682
  },
  {
    "day": 113,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "ML training in Spark",
    "id": 683
  },
  {
    "day": 113,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Build ML batch pipeline.",
    "id": 684
  },
  {
    "day": 114,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Install Spark",
    "id": 685
  },
  {
    "day": 114,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "RDD vs DataFrame",
    "id": 686
  },
  {
    "day": 114,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Transformations",
    "id": 687
  },
  {
    "day": 114,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Joins & aggregations",
    "id": 688
  },
  {
    "day": 114,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Partitioning",
    "id": 689
  },
  {
    "day": 114,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Large dataset simulation",
    "id": 690
  },
  {
    "day": 114,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "ML training in Spark",
    "id": 691
  },
  {
    "day": 114,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Build ML batch pipeline.",
    "id": 692
  },
  {
    "day": 115,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Install Spark",
    "id": 693
  },
  {
    "day": 115,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "RDD vs DataFrame",
    "id": 694
  },
  {
    "day": 115,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Transformations",
    "id": 695
  },
  {
    "day": 115,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Joins & aggregations",
    "id": 696
  },
  {
    "day": 115,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Partitioning",
    "id": 697
  },
  {
    "day": 115,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Large dataset simulation",
    "id": 698
  },
  {
    "day": 115,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "ML training in Spark",
    "id": 699
  },
  {
    "day": 115,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Build ML batch pipeline.",
    "id": 700
  },
  {
    "day": 116,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Install Spark",
    "id": 701
  },
  {
    "day": 116,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "RDD vs DataFrame",
    "id": 702
  },
  {
    "day": 116,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Transformations",
    "id": 703
  },
  {
    "day": 116,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Joins & aggregations",
    "id": 704
  },
  {
    "day": 116,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Partitioning",
    "id": 705
  },
  {
    "day": 116,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Large dataset simulation",
    "id": 706
  },
  {
    "day": 116,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "ML training in Spark",
    "id": 707
  },
  {
    "day": 116,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Build ML batch pipeline.",
    "id": 708
  },
  {
    "day": 117,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Install Spark",
    "id": 709
  },
  {
    "day": 117,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "RDD vs DataFrame",
    "id": 710
  },
  {
    "day": 117,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Transformations",
    "id": 711
  },
  {
    "day": 117,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Joins & aggregations",
    "id": 712
  },
  {
    "day": 117,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Partitioning",
    "id": 713
  },
  {
    "day": 117,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Large dataset simulation",
    "id": 714
  },
  {
    "day": 117,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "ML training in Spark",
    "id": 715
  },
  {
    "day": 117,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Build ML batch pipeline.",
    "id": 716
  },
  {
    "day": 118,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Install Spark",
    "id": 717
  },
  {
    "day": 118,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "RDD vs DataFrame",
    "id": 718
  },
  {
    "day": 118,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Transformations",
    "id": 719
  },
  {
    "day": 118,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Joins & aggregations",
    "id": 720
  },
  {
    "day": 118,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Partitioning",
    "id": 721
  },
  {
    "day": 118,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Large dataset simulation",
    "id": 722
  },
  {
    "day": 118,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "ML training in Spark",
    "id": 723
  },
  {
    "day": 118,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Build ML batch pipeline.",
    "id": 724
  },
  {
    "day": 119,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Install Spark",
    "id": 725
  },
  {
    "day": 119,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "RDD vs DataFrame",
    "id": 726
  },
  {
    "day": 119,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Transformations",
    "id": 727
  },
  {
    "day": 119,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Joins & aggregations",
    "id": 728
  },
  {
    "day": 119,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Partitioning",
    "id": 729
  },
  {
    "day": 119,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Large dataset simulation",
    "id": 730
  },
  {
    "day": 119,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "ML training in Spark",
    "id": 731
  },
  {
    "day": 119,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Build ML batch pipeline.",
    "id": 732
  },
  {
    "day": 120,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Install Spark",
    "id": 733
  },
  {
    "day": 120,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "RDD vs DataFrame",
    "id": 734
  },
  {
    "day": 120,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Transformations",
    "id": 735
  },
  {
    "day": 120,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Joins & aggregations",
    "id": 736
  },
  {
    "day": 120,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Partitioning",
    "id": 737
  },
  {
    "day": 120,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Large dataset simulation",
    "id": 738
  },
  {
    "day": 120,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "ML training in Spark",
    "id": 739
  },
  {
    "day": 120,
    "focus": "PySpark + Pipeline",
    "topic": "Spark",
    "subtopic": "Module",
    "task": "Build ML batch pipeline.",
    "id": 740
  },
  {
    "day": 121,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Docker basics",
    "id": 741
  },
  {
    "day": 121,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Dockerfile",
    "id": 742
  },
  {
    "day": 121,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Containerize ML app",
    "id": 743
  },
  {
    "day": 121,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "EC2 setup",
    "id": 744
  },
  {
    "day": 121,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "S3 usage",
    "id": 745
  },
  {
    "day": 121,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "IAM basics",
    "id": 746
  },
  {
    "day": 121,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Deploy ML API",
    "id": 747
  },
  {
    "day": 121,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Debug & test endpoint.",
    "id": 748
  },
  {
    "day": 122,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Docker basics",
    "id": 749
  },
  {
    "day": 122,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Dockerfile",
    "id": 750
  },
  {
    "day": 122,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Containerize ML app",
    "id": 751
  },
  {
    "day": 122,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "EC2 setup",
    "id": 752
  },
  {
    "day": 122,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "S3 usage",
    "id": 753
  },
  {
    "day": 122,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "IAM basics",
    "id": 754
  },
  {
    "day": 122,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Deploy ML API",
    "id": 755
  },
  {
    "day": 122,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Debug & test endpoint.",
    "id": 756
  },
  {
    "day": 123,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Docker basics",
    "id": 757
  },
  {
    "day": 123,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Dockerfile",
    "id": 758
  },
  {
    "day": 123,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Containerize ML app",
    "id": 759
  },
  {
    "day": 123,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "EC2 setup",
    "id": 760
  },
  {
    "day": 123,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "S3 usage",
    "id": 761
  },
  {
    "day": 123,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "IAM basics",
    "id": 762
  },
  {
    "day": 123,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Deploy ML API",
    "id": 763
  },
  {
    "day": 123,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Debug & test endpoint.",
    "id": 764
  },
  {
    "day": 124,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Docker basics",
    "id": 765
  },
  {
    "day": 124,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Dockerfile",
    "id": 766
  },
  {
    "day": 124,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Containerize ML app",
    "id": 767
  },
  {
    "day": 124,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "EC2 setup",
    "id": 768
  },
  {
    "day": 124,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "S3 usage",
    "id": 769
  },
  {
    "day": 124,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "IAM basics",
    "id": 770
  },
  {
    "day": 124,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Deploy ML API",
    "id": 771
  },
  {
    "day": 124,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Debug & test endpoint.",
    "id": 772
  },
  {
    "day": 125,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Docker basics",
    "id": 773
  },
  {
    "day": 125,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Dockerfile",
    "id": 774
  },
  {
    "day": 125,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Containerize ML app",
    "id": 775
  },
  {
    "day": 125,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "EC2 setup",
    "id": 776
  },
  {
    "day": 125,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "S3 usage",
    "id": 777
  },
  {
    "day": 125,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "IAM basics",
    "id": 778
  },
  {
    "day": 125,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Deploy ML API",
    "id": 779
  },
  {
    "day": 125,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Debug & test endpoint.",
    "id": 780
  },
  {
    "day": 126,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Docker basics",
    "id": 781
  },
  {
    "day": 126,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Dockerfile",
    "id": 782
  },
  {
    "day": 126,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Containerize ML app",
    "id": 783
  },
  {
    "day": 126,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "EC2 setup",
    "id": 784
  },
  {
    "day": 126,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "S3 usage",
    "id": 785
  },
  {
    "day": 126,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "IAM basics",
    "id": 786
  },
  {
    "day": 126,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Deploy ML API",
    "id": 787
  },
  {
    "day": 126,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Debug & test endpoint.",
    "id": 788
  },
  {
    "day": 127,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Docker basics",
    "id": 789
  },
  {
    "day": 127,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Dockerfile",
    "id": 790
  },
  {
    "day": 127,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Containerize ML app",
    "id": 791
  },
  {
    "day": 127,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "EC2 setup",
    "id": 792
  },
  {
    "day": 127,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "S3 usage",
    "id": 793
  },
  {
    "day": 127,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "IAM basics",
    "id": 794
  },
  {
    "day": 127,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Deploy ML API",
    "id": 795
  },
  {
    "day": 127,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Debug & test endpoint.",
    "id": 796
  },
  {
    "day": 128,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Docker basics",
    "id": 797
  },
  {
    "day": 128,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Dockerfile",
    "id": 798
  },
  {
    "day": 128,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Containerize ML app",
    "id": 799
  },
  {
    "day": 128,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "EC2 setup",
    "id": 800
  },
  {
    "day": 128,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "S3 usage",
    "id": 801
  },
  {
    "day": 128,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "IAM basics",
    "id": 802
  },
  {
    "day": 128,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Deploy ML API",
    "id": 803
  },
  {
    "day": 128,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Debug & test endpoint.",
    "id": 804
  },
  {
    "day": 129,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Docker basics",
    "id": 805
  },
  {
    "day": 129,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Dockerfile",
    "id": 806
  },
  {
    "day": 129,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Containerize ML app",
    "id": 807
  },
  {
    "day": 129,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "EC2 setup",
    "id": 808
  },
  {
    "day": 129,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "S3 usage",
    "id": 809
  },
  {
    "day": 129,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "IAM basics",
    "id": 810
  },
  {
    "day": 129,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Deploy ML API",
    "id": 811
  },
  {
    "day": 129,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Debug & test endpoint.",
    "id": 812
  },
  {
    "day": 130,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Docker basics",
    "id": 813
  },
  {
    "day": 130,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Dockerfile",
    "id": 814
  },
  {
    "day": 130,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Containerize ML app",
    "id": 815
  },
  {
    "day": 130,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "EC2 setup",
    "id": 816
  },
  {
    "day": 130,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "S3 usage",
    "id": 817
  },
  {
    "day": 130,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "IAM basics",
    "id": 818
  },
  {
    "day": 130,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Deploy ML API",
    "id": 819
  },
  {
    "day": 130,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Debug & test endpoint.",
    "id": 820
  },
  {
    "day": 131,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Docker basics",
    "id": 821
  },
  {
    "day": 131,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Dockerfile",
    "id": 822
  },
  {
    "day": 131,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Containerize ML app",
    "id": 823
  },
  {
    "day": 131,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "EC2 setup",
    "id": 824
  },
  {
    "day": 131,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "S3 usage",
    "id": 825
  },
  {
    "day": 131,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "IAM basics",
    "id": 826
  },
  {
    "day": 131,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Deploy ML API",
    "id": 827
  },
  {
    "day": 131,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Debug & test endpoint.",
    "id": 828
  },
  {
    "day": 132,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Docker basics",
    "id": 829
  },
  {
    "day": 132,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Dockerfile",
    "id": 830
  },
  {
    "day": 132,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Containerize ML app",
    "id": 831
  },
  {
    "day": 132,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "EC2 setup",
    "id": 832
  },
  {
    "day": 132,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "S3 usage",
    "id": 833
  },
  {
    "day": 132,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "IAM basics",
    "id": 834
  },
  {
    "day": 132,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Deploy ML API",
    "id": 835
  },
  {
    "day": 132,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Debug & test endpoint.",
    "id": 836
  },
  {
    "day": 133,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Docker basics",
    "id": 837
  },
  {
    "day": 133,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Dockerfile",
    "id": 838
  },
  {
    "day": 133,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Containerize ML app",
    "id": 839
  },
  {
    "day": 133,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "EC2 setup",
    "id": 840
  },
  {
    "day": 133,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "S3 usage",
    "id": 841
  },
  {
    "day": 133,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "IAM basics",
    "id": 842
  },
  {
    "day": 133,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Deploy ML API",
    "id": 843
  },
  {
    "day": 133,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Debug & test endpoint.",
    "id": 844
  },
  {
    "day": 134,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Docker basics",
    "id": 845
  },
  {
    "day": 134,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Dockerfile",
    "id": 846
  },
  {
    "day": 134,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Containerize ML app",
    "id": 847
  },
  {
    "day": 134,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "EC2 setup",
    "id": 848
  },
  {
    "day": 134,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "S3 usage",
    "id": 849
  },
  {
    "day": 134,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "IAM basics",
    "id": 850
  },
  {
    "day": 134,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Deploy ML API",
    "id": 851
  },
  {
    "day": 134,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Debug & test endpoint.",
    "id": 852
  },
  {
    "day": 135,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Docker basics",
    "id": 853
  },
  {
    "day": 135,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Dockerfile",
    "id": 854
  },
  {
    "day": 135,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Containerize ML app",
    "id": 855
  },
  {
    "day": 135,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "EC2 setup",
    "id": 856
  },
  {
    "day": 135,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "S3 usage",
    "id": 857
  },
  {
    "day": 135,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "IAM basics",
    "id": 858
  },
  {
    "day": 135,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Deploy ML API",
    "id": 859
  },
  {
    "day": 135,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Debug & test endpoint.",
    "id": 860
  },
  {
    "day": 136,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Docker basics",
    "id": 861
  },
  {
    "day": 136,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Dockerfile",
    "id": 862
  },
  {
    "day": 136,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Containerize ML app",
    "id": 863
  },
  {
    "day": 136,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "EC2 setup",
    "id": 864
  },
  {
    "day": 136,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "S3 usage",
    "id": 865
  },
  {
    "day": 136,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "IAM basics",
    "id": 866
  },
  {
    "day": 136,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Deploy ML API",
    "id": 867
  },
  {
    "day": 136,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Debug & test endpoint.",
    "id": 868
  },
  {
    "day": 137,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Docker basics",
    "id": 869
  },
  {
    "day": 137,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Dockerfile",
    "id": 870
  },
  {
    "day": 137,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Containerize ML app",
    "id": 871
  },
  {
    "day": 137,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "EC2 setup",
    "id": 872
  },
  {
    "day": 137,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "S3 usage",
    "id": 873
  },
  {
    "day": 137,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "IAM basics",
    "id": 874
  },
  {
    "day": 137,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Deploy ML API",
    "id": 875
  },
  {
    "day": 137,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Debug & test endpoint.",
    "id": 876
  },
  {
    "day": 138,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Docker basics",
    "id": 877
  },
  {
    "day": 138,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Dockerfile",
    "id": 878
  },
  {
    "day": 138,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Containerize ML app",
    "id": 879
  },
  {
    "day": 138,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "EC2 setup",
    "id": 880
  },
  {
    "day": 138,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "S3 usage",
    "id": 881
  },
  {
    "day": 138,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "IAM basics",
    "id": 882
  },
  {
    "day": 138,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Deploy ML API",
    "id": 883
  },
  {
    "day": 138,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Debug & test endpoint.",
    "id": 884
  },
  {
    "day": 139,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Docker basics",
    "id": 885
  },
  {
    "day": 139,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Dockerfile",
    "id": 886
  },
  {
    "day": 139,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Containerize ML app",
    "id": 887
  },
  {
    "day": 139,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "EC2 setup",
    "id": 888
  },
  {
    "day": 139,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "S3 usage",
    "id": 889
  },
  {
    "day": 139,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "IAM basics",
    "id": 890
  },
  {
    "day": 139,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Deploy ML API",
    "id": 891
  },
  {
    "day": 139,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Debug & test endpoint.",
    "id": 892
  },
  {
    "day": 140,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Docker basics",
    "id": 893
  },
  {
    "day": 140,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Dockerfile",
    "id": 894
  },
  {
    "day": 140,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Containerize ML app",
    "id": 895
  },
  {
    "day": 140,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "EC2 setup",
    "id": 896
  },
  {
    "day": 140,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "S3 usage",
    "id": 897
  },
  {
    "day": 140,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "IAM basics",
    "id": 898
  },
  {
    "day": 140,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Deploy ML API",
    "id": 899
  },
  {
    "day": 140,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Debug & test endpoint.",
    "id": 900
  },
  {
    "day": 141,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Docker basics",
    "id": 901
  },
  {
    "day": 141,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Dockerfile",
    "id": 902
  },
  {
    "day": 141,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Containerize ML app",
    "id": 903
  },
  {
    "day": 141,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "EC2 setup",
    "id": 904
  },
  {
    "day": 141,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "S3 usage",
    "id": 905
  },
  {
    "day": 141,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "IAM basics",
    "id": 906
  },
  {
    "day": 141,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Deploy ML API",
    "id": 907
  },
  {
    "day": 141,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Debug & test endpoint.",
    "id": 908
  },
  {
    "day": 142,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Docker basics",
    "id": 909
  },
  {
    "day": 142,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Dockerfile",
    "id": 910
  },
  {
    "day": 142,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Containerize ML app",
    "id": 911
  },
  {
    "day": 142,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "EC2 setup",
    "id": 912
  },
  {
    "day": 142,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "S3 usage",
    "id": 913
  },
  {
    "day": 142,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "IAM basics",
    "id": 914
  },
  {
    "day": 142,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Deploy ML API",
    "id": 915
  },
  {
    "day": 142,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Debug & test endpoint.",
    "id": 916
  },
  {
    "day": 143,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Docker basics",
    "id": 917
  },
  {
    "day": 143,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Dockerfile",
    "id": 918
  },
  {
    "day": 143,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Containerize ML app",
    "id": 919
  },
  {
    "day": 143,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "EC2 setup",
    "id": 920
  },
  {
    "day": 143,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "S3 usage",
    "id": 921
  },
  {
    "day": 143,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "IAM basics",
    "id": 922
  },
  {
    "day": 143,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Deploy ML API",
    "id": 923
  },
  {
    "day": 143,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Debug & test endpoint.",
    "id": 924
  },
  {
    "day": 144,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Docker basics",
    "id": 925
  },
  {
    "day": 144,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Dockerfile",
    "id": 926
  },
  {
    "day": 144,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Containerize ML app",
    "id": 927
  },
  {
    "day": 144,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "EC2 setup",
    "id": 928
  },
  {
    "day": 144,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "S3 usage",
    "id": 929
  },
  {
    "day": 144,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "IAM basics",
    "id": 930
  },
  {
    "day": 144,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Deploy ML API",
    "id": 931
  },
  {
    "day": 144,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Debug & test endpoint.",
    "id": 932
  },
  {
    "day": 145,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Docker basics",
    "id": 933
  },
  {
    "day": 145,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Dockerfile",
    "id": 934
  },
  {
    "day": 145,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Containerize ML app",
    "id": 935
  },
  {
    "day": 145,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "EC2 setup",
    "id": 936
  },
  {
    "day": 145,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "S3 usage",
    "id": 937
  },
  {
    "day": 145,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "IAM basics",
    "id": 938
  },
  {
    "day": 145,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Deploy ML API",
    "id": 939
  },
  {
    "day": 145,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Debug & test endpoint.",
    "id": 940
  },
  {
    "day": 146,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Docker basics",
    "id": 941
  },
  {
    "day": 146,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Dockerfile",
    "id": 942
  },
  {
    "day": 146,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Containerize ML app",
    "id": 943
  },
  {
    "day": 146,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "EC2 setup",
    "id": 944
  },
  {
    "day": 146,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "S3 usage",
    "id": 945
  },
  {
    "day": 146,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "IAM basics",
    "id": 946
  },
  {
    "day": 146,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Deploy ML API",
    "id": 947
  },
  {
    "day": 146,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Debug & test endpoint.",
    "id": 948
  },
  {
    "day": 147,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Docker basics",
    "id": 949
  },
  {
    "day": 147,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Dockerfile",
    "id": 950
  },
  {
    "day": 147,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Containerize ML app",
    "id": 951
  },
  {
    "day": 147,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "EC2 setup",
    "id": 952
  },
  {
    "day": 147,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "S3 usage",
    "id": 953
  },
  {
    "day": 147,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "IAM basics",
    "id": 954
  },
  {
    "day": 147,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Deploy ML API",
    "id": 955
  },
  {
    "day": 147,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Debug & test endpoint.",
    "id": 956
  },
  {
    "day": 148,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Docker basics",
    "id": 957
  },
  {
    "day": 148,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Dockerfile",
    "id": 958
  },
  {
    "day": 148,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Containerize ML app",
    "id": 959
  },
  {
    "day": 148,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "EC2 setup",
    "id": 960
  },
  {
    "day": 148,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "S3 usage",
    "id": 961
  },
  {
    "day": 148,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "IAM basics",
    "id": 962
  },
  {
    "day": 148,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Deploy ML API",
    "id": 963
  },
  {
    "day": 148,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Debug & test endpoint.",
    "id": 964
  },
  {
    "day": 149,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Docker basics",
    "id": 965
  },
  {
    "day": 149,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Dockerfile",
    "id": 966
  },
  {
    "day": 149,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Containerize ML app",
    "id": 967
  },
  {
    "day": 149,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "EC2 setup",
    "id": 968
  },
  {
    "day": 149,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "S3 usage",
    "id": 969
  },
  {
    "day": 149,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "IAM basics",
    "id": 970
  },
  {
    "day": 149,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Deploy ML API",
    "id": 971
  },
  {
    "day": 149,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Debug & test endpoint.",
    "id": 972
  },
  {
    "day": 150,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Docker basics",
    "id": 973
  },
  {
    "day": 150,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Dockerfile",
    "id": 974
  },
  {
    "day": 150,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Containerize ML app",
    "id": 975
  },
  {
    "day": 150,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "EC2 setup",
    "id": 976
  },
  {
    "day": 150,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "S3 usage",
    "id": 977
  },
  {
    "day": 150,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "IAM basics",
    "id": 978
  },
  {
    "day": 150,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Deploy ML API",
    "id": 979
  },
  {
    "day": 150,
    "focus": "Docker + AWS",
    "topic": "Ops",
    "subtopic": "Module",
    "task": "Debug & test endpoint.",
    "id": 980
  },
  {
    "day": 151,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 DSA problem",
    "id": 981
  },
  {
    "day": 151,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 SQL revision",
    "id": 982
  },
  {
    "day": 151,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 ML theory topic",
    "id": 983
  },
  {
    "day": 151,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "Apply to 10 jobs.",
    "id": 984
  },
  {
    "day": 152,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 DSA problem",
    "id": 985
  },
  {
    "day": 152,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 SQL revision",
    "id": 986
  },
  {
    "day": 152,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 ML theory topic",
    "id": 987
  },
  {
    "day": 152,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "Apply to 10 jobs.",
    "id": 988
  },
  {
    "day": 153,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 DSA problem",
    "id": 989
  },
  {
    "day": 153,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 SQL revision",
    "id": 990
  },
  {
    "day": 153,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 ML theory topic",
    "id": 991
  },
  {
    "day": 153,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "Apply to 10 jobs.",
    "id": 992
  },
  {
    "day": 154,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 DSA problem",
    "id": 993
  },
  {
    "day": 154,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 SQL revision",
    "id": 994
  },
  {
    "day": 154,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 ML theory topic",
    "id": 995
  },
  {
    "day": 154,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "Apply to 10 jobs",
    "id": 996
  },
  {
    "day": 154,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "Mock interview",
    "id": 997
  },
  {
    "day": 154,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "Resume update",
    "id": 998
  },
  {
    "day": 154,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "LinkedIn outreach.",
    "id": 999
  },
  {
    "day": 155,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 DSA problem",
    "id": 1000
  },
  {
    "day": 155,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 SQL revision",
    "id": 1001
  },
  {
    "day": 155,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 ML theory topic",
    "id": 1002
  },
  {
    "day": 155,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "Apply to 10 jobs.",
    "id": 1003
  },
  {
    "day": 156,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 DSA problem",
    "id": 1004
  },
  {
    "day": 156,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 SQL revision",
    "id": 1005
  },
  {
    "day": 156,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 ML theory topic",
    "id": 1006
  },
  {
    "day": 156,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "Apply to 10 jobs.",
    "id": 1007
  },
  {
    "day": 157,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 DSA problem",
    "id": 1008
  },
  {
    "day": 157,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 SQL revision",
    "id": 1009
  },
  {
    "day": 157,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 ML theory topic",
    "id": 1010
  },
  {
    "day": 157,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "Apply to 10 jobs.",
    "id": 1011
  },
  {
    "day": 158,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 DSA problem",
    "id": 1012
  },
  {
    "day": 158,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 SQL revision",
    "id": 1013
  },
  {
    "day": 158,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 ML theory topic",
    "id": 1014
  },
  {
    "day": 158,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "Apply to 10 jobs.",
    "id": 1015
  },
  {
    "day": 159,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 DSA problem",
    "id": 1016
  },
  {
    "day": 159,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 SQL revision",
    "id": 1017
  },
  {
    "day": 159,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 ML theory topic",
    "id": 1018
  },
  {
    "day": 159,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "Apply to 10 jobs.",
    "id": 1019
  },
  {
    "day": 160,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 DSA problem",
    "id": 1020
  },
  {
    "day": 160,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 SQL revision",
    "id": 1021
  },
  {
    "day": 160,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 ML theory topic",
    "id": 1022
  },
  {
    "day": 160,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "Apply to 10 jobs.",
    "id": 1023
  },
  {
    "day": 161,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 DSA problem",
    "id": 1024
  },
  {
    "day": 161,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 SQL revision",
    "id": 1025
  },
  {
    "day": 161,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 ML theory topic",
    "id": 1026
  },
  {
    "day": 161,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "Apply to 10 jobs",
    "id": 1027
  },
  {
    "day": 161,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "Mock interview",
    "id": 1028
  },
  {
    "day": 161,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "Resume update",
    "id": 1029
  },
  {
    "day": 161,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "LinkedIn outreach.",
    "id": 1030
  },
  {
    "day": 162,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 DSA problem",
    "id": 1031
  },
  {
    "day": 162,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 SQL revision",
    "id": 1032
  },
  {
    "day": 162,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 ML theory topic",
    "id": 1033
  },
  {
    "day": 162,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "Apply to 10 jobs.",
    "id": 1034
  },
  {
    "day": 163,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 DSA problem",
    "id": 1035
  },
  {
    "day": 163,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 SQL revision",
    "id": 1036
  },
  {
    "day": 163,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 ML theory topic",
    "id": 1037
  },
  {
    "day": 163,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "Apply to 10 jobs.",
    "id": 1038
  },
  {
    "day": 164,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 DSA problem",
    "id": 1039
  },
  {
    "day": 164,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 SQL revision",
    "id": 1040
  },
  {
    "day": 164,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 ML theory topic",
    "id": 1041
  },
  {
    "day": 164,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "Apply to 10 jobs.",
    "id": 1042
  },
  {
    "day": 165,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 DSA problem",
    "id": 1043
  },
  {
    "day": 165,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 SQL revision",
    "id": 1044
  },
  {
    "day": 165,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 ML theory topic",
    "id": 1045
  },
  {
    "day": 165,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "Apply to 10 jobs.",
    "id": 1046
  },
  {
    "day": 166,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 DSA problem",
    "id": 1047
  },
  {
    "day": 166,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 SQL revision",
    "id": 1048
  },
  {
    "day": 166,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 ML theory topic",
    "id": 1049
  },
  {
    "day": 166,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "Apply to 10 jobs.",
    "id": 1050
  },
  {
    "day": 167,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 DSA problem",
    "id": 1051
  },
  {
    "day": 167,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 SQL revision",
    "id": 1052
  },
  {
    "day": 167,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 ML theory topic",
    "id": 1053
  },
  {
    "day": 167,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "Apply to 10 jobs.",
    "id": 1054
  },
  {
    "day": 168,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 DSA problem",
    "id": 1055
  },
  {
    "day": 168,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 SQL revision",
    "id": 1056
  },
  {
    "day": 168,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 ML theory topic",
    "id": 1057
  },
  {
    "day": 168,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "Apply to 10 jobs",
    "id": 1058
  },
  {
    "day": 168,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "Mock interview",
    "id": 1059
  },
  {
    "day": 168,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "Resume update",
    "id": 1060
  },
  {
    "day": 168,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "LinkedIn outreach.",
    "id": 1061
  },
  {
    "day": 169,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 DSA problem",
    "id": 1062
  },
  {
    "day": 169,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 SQL revision",
    "id": 1063
  },
  {
    "day": 169,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 ML theory topic",
    "id": 1064
  },
  {
    "day": 169,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "Apply to 10 jobs.",
    "id": 1065
  },
  {
    "day": 170,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 DSA problem",
    "id": 1066
  },
  {
    "day": 170,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 SQL revision",
    "id": 1067
  },
  {
    "day": 170,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 ML theory topic",
    "id": 1068
  },
  {
    "day": 170,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "Apply to 10 jobs.",
    "id": 1069
  },
  {
    "day": 171,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 DSA problem",
    "id": 1070
  },
  {
    "day": 171,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 SQL revision",
    "id": 1071
  },
  {
    "day": 171,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 ML theory topic",
    "id": 1072
  },
  {
    "day": 171,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "Apply to 10 jobs.",
    "id": 1073
  },
  {
    "day": 172,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 DSA problem",
    "id": 1074
  },
  {
    "day": 172,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 SQL revision",
    "id": 1075
  },
  {
    "day": 172,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 ML theory topic",
    "id": 1076
  },
  {
    "day": 172,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "Apply to 10 jobs.",
    "id": 1077
  },
  {
    "day": 173,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 DSA problem",
    "id": 1078
  },
  {
    "day": 173,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 SQL revision",
    "id": 1079
  },
  {
    "day": 173,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 ML theory topic",
    "id": 1080
  },
  {
    "day": 173,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "Apply to 10 jobs.",
    "id": 1081
  },
  {
    "day": 174,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 DSA problem",
    "id": 1082
  },
  {
    "day": 174,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 SQL revision",
    "id": 1083
  },
  {
    "day": 174,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 ML theory topic",
    "id": 1084
  },
  {
    "day": 174,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "Apply to 10 jobs.",
    "id": 1085
  },
  {
    "day": 175,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 DSA problem",
    "id": 1086
  },
  {
    "day": 175,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 SQL revision",
    "id": 1087
  },
  {
    "day": 175,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 ML theory topic",
    "id": 1088
  },
  {
    "day": 175,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "Apply to 10 jobs",
    "id": 1089
  },
  {
    "day": 175,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "Mock interview",
    "id": 1090
  },
  {
    "day": 175,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "Resume update",
    "id": 1091
  },
  {
    "day": 175,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "LinkedIn outreach.",
    "id": 1092
  },
  {
    "day": 176,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 DSA problem",
    "id": 1093
  },
  {
    "day": 176,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 SQL revision",
    "id": 1094
  },
  {
    "day": 176,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 ML theory topic",
    "id": 1095
  },
  {
    "day": 176,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "Apply to 10 jobs.",
    "id": 1096
  },
  {
    "day": 177,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 DSA problem",
    "id": 1097
  },
  {
    "day": 177,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 SQL revision",
    "id": 1098
  },
  {
    "day": 177,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 ML theory topic",
    "id": 1099
  },
  {
    "day": 177,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "Apply to 10 jobs.",
    "id": 1100
  },
  {
    "day": 178,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 DSA problem",
    "id": 1101
  },
  {
    "day": 178,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 SQL revision",
    "id": 1102
  },
  {
    "day": 178,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 ML theory topic",
    "id": 1103
  },
  {
    "day": 178,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "Apply to 10 jobs.",
    "id": 1104
  },
  {
    "day": 179,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 DSA problem",
    "id": 1105
  },
  {
    "day": 179,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 SQL revision",
    "id": 1106
  },
  {
    "day": 179,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 ML theory topic",
    "id": 1107
  },
  {
    "day": 179,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "Apply to 10 jobs.",
    "id": 1108
  },
  {
    "day": 180,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 DSA problem",
    "id": 1109
  },
  {
    "day": 180,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 SQL revision",
    "id": 1110
  },
  {
    "day": 180,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "1 ML theory topic",
    "id": 1111
  },
  {
    "day": 180,
    "focus": "Job Mode",
    "topic": "Job Hunt",
    "subtopic": "Interviews",
    "task": "Apply to 10 jobs.",
    "id": 1112
  }
];