import json

def generate_roadmap_json():
    tasks = []
    
    # --- MONTH 1: PYTHON + SQL (Day 1-30) ---
    m1_tasks = {
        1: ("Python Basics", "Variables & Types", "Write 20 variable examples, practice type conversions, solve 10 small exercises. Install Python + VS Code + Git. Setup project folder. Deliverable: day1_basics.py"),
        2: ("Python Basics", "Functions", "Write 10 custom functions, default arguments, return values. Practice 5 small logic problems. Deliverable: functions_practice.py"),
        3: ("Python Basics", "Loops", "10 loop exercises (for/while), 5 list comprehension examples. Debugging practice."),
        4: ("SQL", "SELECT + WHERE", "Solve 15 filtering problems on LeetCode/HackerRank."),
        5: ("SQL", "GROUP BY", "Solve 15 aggregation problems (COUNT, SUM, AVG) on SQLZoo."),
        6: ("Python Basics", "OOP (OOP)", "Create 3 classes, constructor practice, Object creation."),
        7: ("SQL", "Joins", "Solve 15 JOIN problems (INNER, LEFT). Weekly Checkpoint: 45+ SQL, 4 Python scripts."),
        8: ("SQL", "Subqueries", "Solve 10 subquery problems."),
        9: ("SQL", "Window Functions", "ROW_NUMBER, RANK - solve 10 problems."),
        10: ("Python", "File Handling", "Read/Write files, JSON processing."),
        11: ("Python", "Exception Handling", "Try-except blocks, custom exceptions."),
        12: ("Python", "Modules/Venv", "Virtual environments, modular coding."),
        13: ("SQL", "Practice", "20 mixed SQL problems."),
        14: ("Python", "Mini Script #1", "Build CSV processor. Deliverable: csv_processor.py"),
        15: ("SQL", "Optimization", "SQL optimization basics, explain plans."),
        16: ("SQL", "Indexing", "Index concepts, performance impact."),
        17: ("SQL", "Practice", "20 SQL problems."),
        18: ("Python", "Logging", "Implement logging in a script."),
        19: ("Python", "Mini Script #2", "Build data cleaner. Deliverable: data_cleaner.py"),
        20: ("SQL", "Practice", "20 SQL problems."),
        21: ("Review", "Debug", "Review and debug weak areas."),
        22: ("SQL", "Intensive", "10 SQL problems."),
        23: ("SQL", "Intensive", "10 SQL problems."),
        24: ("SQL", "Intensive", "10 SQL problems."),
        25: ("SQL", "Intensive", "10 SQL problems."),
        26: ("Python", "Mini Script #3", "API data fetch script using requests. Deliverable: api_fetcher.py"),
        27: ("Mock Test", "SQL Mock", "Timed mock test 1."),
        28: ("Mock Test", "SQL Mock", "Timed mock test 2."),
        29: ("Mock Test", "SQL Mock", "Timed mock test 3."),
        30: ("Review", "Full Revision", "Full revision + 100 SQL completed total."),
    }

    # --- MONTH 2: PANDAS + ML (Day 31-60) ---
    m2_tasks = {
        31: ("NumPy", "Arrays", "NumPy array creation, indexing, slicing."),
        32: ("NumPy", "Operations", "Array math, broadcasting, vectorization."),
        33: ("Pandas", "DataFrame Basics", "Loading data, basic inspection."),
        34: ("Pandas", "Cleaning", "Handling messy columns, renaming, dropping."),
        35: ("Pandas", "Missing Values", "Imputation, dropping NaNs."),
        36: ("Pandas", "Feature Eng", "Creating new columns, map, apply."),
        37: ("EDA", "Practice", "Exploratory Data Analysis on a Kaggle dataset."),
        38: ("Visualization", "Matplotlib", "Line, scatter, bar plots."),
        39: ("Visualization", "Seaborn", "Heatmaps, pairplots, boxplots."),
        40: ("ML Theory", "Linear Regression", "Mathematical intuition, OLS."),
        41: ("ML Implement", "Linear Regression", "Coding LR from scratch or scikit-learn."),
        42: ("ML Theory", "Logistic Regression", "Sigmoid, binary classification."),
        43: ("ML Implement", "Logistic Regression", "Coding Logistic Reg."),
        44: ("ML Metrics", "Evaluation", "Precision, recall, ROC-AUC, F1."),
        45: ("ML Theory", "Decision Trees", "Entropy, Gini impurity."),
        46: ("ML Implement", "Random Forest", "Ensemble methods, bagging."),
        47: ("ML Implement", "XGBoost", "Boosting basics, hyperparameter tuning."),
        48: ("Project", "Regression", "Regression Project Day 1."),
        49: ("Project", "Regression", "Regression Project Day 2."),
        50: ("Project", "Regression", "Regression Project Day 3."),
        51: ("Project", "Classification", "Classification Project Day 1."),
        52: ("Project", "Classification", "Classification Project Day 2."),
        53: ("Project", "Classification", "Classification Project Day 3."),
        54: ("Documentation", "README", "Write professional README for projects."),
        55: ("Improvement", "Optimization", "Refactor and optimize project code."),
        56: ("Improvement", "Optimization", "Refactor and optimize project code."),
        57: ("GitHub", "Push", "Push clean code to GitHub."),
        58: ("GitHub", "Push", "Push clean code to GitHub."),
        59: ("GitHub", "Push", "Push clean code to GitHub."),
        60: ("Closure", "Review", "Review Month 2 concepts."),
    }

    # --- MONTH 3: PYTORCH + DL (Day 61-90) ---
    m3_tasks = {
        61: ("DL Basics", "Tensors", "PyTorch tensor operations."),
        62: ("DL Basics", "Autograd", "Gradients and backprop."),
        63: ("DL Basics", "Training Loop", "Defining a basic training loop."),
        64: ("DL Basics", "Tensors", "Advanced tensor manipulation."),
        65: ("DL Basics", "Autograd", "Practice gradients."),
        66: ("DL Basics", "Training Loop", "Refine training loop."),
        67: ("DL Basics", "Review", "Review first week of DL."),
        68: ("DL Components", "Loss Functions", "MSE, CrossEntropy, custom loss."),
        69: ("DL Components", "Optimizers", "SGD, Adam, learning rate schedulers."),
        70: ("DL Components", "Custom Dataset", "Dataset/DataLoader and transforms."),
        71: ("DL Components", "Loss Functions", "Deep dive into loss functions."),
        72: ("DL Components", "Optimizers", "Optimizer tuning."),
        73: ("DL Components", "Custom Dataset", "Complex data pipelines."),
        74: ("DL Components", "Review", "Review components."),
        75: ("DL Architectures", "CNN Basics", "Convolutions, padding, pooling."),
        76: ("DL Architectures", "Model Save/Load", "Checkpointing models."),
        77: ("DL Architectures", "Refactor", "Standardizing DL code structure."),
        78: ("DL Architectures", "CNN Practice", "Build a small CNN for MNIST."),
        79: ("DL Architectures", "CNN Practice", "Build a small CNN for CIFAR-10."),
        80: ("DL Architectures", "Transfer Learning", "Pretrained models basics."),
        81: ("DL Architectures", "Review", "Review CNNs."),
        82: ("Deployment", "FastAPI", "FastAPI basics, Pydantic models."),
        83: ("Deployment", "Endpoint", "Create inference endpoint for DL model."),
        84: ("Deployment", "Integration", "Connecting model to API."),
        85: ("Deployment", "Testing", "Testing API locally."),
        86: ("Project", "Final DL", "Start Final DL Project."),
        87: ("Project", "Final DL", "Work on Final DL Project."),
        88: ("Project", "Final DL", "Work on Final DL Project."),
        89: ("Project", "Final DL", "Work on Final DL Project."),
        90: ("Project", "Complete", "Final DL Project Complete."),
    }

    # Combine all
    all_roadmap = []
    for i in range(1, 181):
        if i <= 30: f, t, s, tk = "Python + SQL Lock", *m1_tasks[i][0:3]
        elif i <= 60: f, t, s, tk = "Pandas + ML Fundamentals", *m2_tasks[i][0:3]
        elif i <= 90: f, t, s, tk = "PyTorch + DL Project", *m3_tasks[i][0:3]
        elif i <= 120: 
            f = "PySpark + Pipeline"
            t, s, tk = "Spark", "Pipeline", "Spark transformations and ML pipelines."
        elif i <= 150:
            f = "Docker + AWS"
            t, s, tk = "Ops", "Cloud", "Deploying with Docker/AWS."
        else:
            f = "Interview + Job Mode"
            t, s, tk = "Job Hunt", "Interview Prep", "DSA, SQL revision, job applications."

        all_roadmap.append({
            "id": i,
            "day": i,
            "focus": f,
            "topic": t,
            "subtopic": s,
            "task": tk
        })

    return all_roadmap

def save_data_js():
    data = generate_roadmap_json()
    with open('/Users/admin/Downloads/tracker/interface/data.js', 'w') as f:
        f.write("const roadmapData = ")
        f.write(json.dumps(data, indent=2))
        f.write(";")

if __name__ == "__main__":
    save_data_js()
