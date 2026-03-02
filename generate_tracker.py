import pandas as pd
import datetime

def generate_roadmap():
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

    # --- MONTH 4: PYSPARK + PIPELINES (Day 91-120) ---
    m4_tasks = {
        91: ("Spark", "Setup", "Local Spark setup and configuration."),
        92: ("Spark", "DataFrame Ops", "Essential Spark transformations."),
        93: ("Spark", "DataFrame Ops", "Filtering and joining in Spark."),
        94: ("Spark", "DataFrame Ops", "Aggregations and group by."),
        95: ("Spark", "Review", "Review Spark basics."),
        96: ("Spark", "Transformations", "Mapping, flatmap, selectExpr."),
        97: ("Spark", "Joins", "Broadcast joins, shuffle joins."),
        98: ("Spark", "Aggregations", "Window functions in Spark."),
        105: ("Spark", "Simulation", "Generate 1GB simulated dataset."),
        106: ("Spark", "Partitioning", "Repartition vs Coalesce logic."),
        113: ("Pipeline", "Batch Train", "Building a batch training pipeline."),
        114: ("Pipeline", "Structure", "Organizing your Spark code."),
        120: ("Closure", "Complete", "Spark ML Pipeline Project complete."),
    }
    # Fill missing days in M4
    for i in range(91, 121):
        if i not in m4_tasks:
            prev = m4_tasks.get(i-1, ("Spark", "Practice", "Continue working on earlier topics."))
            m4_tasks[i] = (prev[0], "Practice", f"Advance depth on {prev[1]}.")

    # --- MONTH 5: DOCKER + AWS (Day 121-150) ---
    m5_tasks = {
        121: ("Docker", "Basics", "Images, containers, registries."),
        122: ("Docker", "Dockerfile", "Writing production-grade Dockerfiles."),
        123: ("Docker", "Basics", "Docker compose for multi-service apps."),
        124: ("Docker", "Basics", "Docker networking and volumes."),
        128: ("Docker", "ML App", "Containerize the FastAPI ML service."),
        135: ("AWS", "EC2", "Instance types, security groups, SSH."),
        136: ("AWS", "S3", "Buckets, CLI, Python integration."),
        137: ("AWS", "IAM", "Users, roles, and policies."),
        143: ("Deploy", "ML API", "Deploy API to EC2 using Docker."),
        144: ("Deploy", "Endpoint", "Testing and securing the live endpoint."),
        145: ("Deploy", "Bugs", "Fix deployment and network issues."),
        150: ("Closure", "Live System", "Live deployed ML system verified."),
    }
    # Fill missing days in M5
    for i in range(121, 151):
        if i not in m5_tasks:
            prev = m5_tasks.get(i-1, ("Cloud", "Practice", "Refining cloud settings."))
            m5_tasks[i] = (prev[0], "Practice", f"Practice {prev[1]} implementation.")

    # --- MONTH 6: INTERVIEW PREP (Day 151-180) ---
    for i in range(151, 181):
        focus = "Interview + Job Mode"
        topic = "Job Hunt"
        sub = "DSA + SQL + ML + Apply"
        task = "1 DSA problem, 1 SQL revision, 1 ML theory topic, Apply to 10 jobs."
        if i % 7 == 0:
            task += " (WEEKLY CHECKPOINT: Mock interview, Resume improvement, LinkedIn networking)"
        tasks.append([i, focus, topic, sub, task])

    # Combine all
    for i in range(1, 31): tasks.append([i, "Python + SQL Lock", *m1_tasks[i]])
    for i in range(31, 61): tasks.append([i, "Pandas + ML Fundamentals", *m2_tasks[i]])
    for i in range(61, 91): tasks.append([i, "PyTorch + DL Project", *m3_tasks[i]])
    for i in range(91, 121): tasks.append([i, "PySpark + Pipeline", *m4_tasks[i]])
    for i in range(121, 151): tasks.append([i, "Docker + AWS", *m5_tasks[i]])

    tasks.sort(key=lambda x: x[0])
    return tasks

def create_excel():
    data = generate_roadmap()
    df = pd.DataFrame(data, columns=['Day Number', 'Focus Area', 'Main Topic', 'Subtopic', 'Exact Task To Do Today'])
    
    # Add columns and defaults
    df['Date'] = ""
    df['Month'] = ""
    df['Practice Problems Count'] = 0
    df['Project Work'] = "No"
    df['Hours Planned'] = 3
    df['Hours Completed'] = 0
    df['Completed?'] = False
    df['GitHub Push?'] = "No"
    df['Confidence Level'] = 3
    df['Notes'] = ""

    cols = ['Day Number', 'Date', 'Month', 'Focus Area', 'Main Topic', 'Subtopic', 
            'Exact Task To Do Today', 'Practice Problems Count', 'Project Work', 
            'Hours Planned', 'Hours Completed', 'Completed?', 'GitHub Push?', 
            'Confidence Level', 'Notes']
    df = df[cols]

    filename = "/Users/admin/Downloads/tracker/180_Day_ML_Job_Prep_Tracker.xlsx"
    writer = pd.ExcelWriter(filename, engine='xlsxwriter')
    df.to_excel(writer, sheet_name='DAILY_TRACKER', index=False, startrow=3)
    
    workbook = writer.book
    worksheet = writer.sheets['DAILY_TRACKER']

    # Formats
    header_fmt = workbook.add_format({'bold': True, 'bg_color': '#E0E0E0', 'border': 1})
    pct_fmt = workbook.add_format({'num_format': '0%'})
    
    for col, value in enumerate(df.columns):
        worksheet.write(3, col, value, header_fmt)

    # Formulas
    worksheet.write(0, 0, "START DATE:")
    worksheet.write(0, 1, datetime.date.today().strftime('%Y-%m-%d'))
    
    for r in range(4, 184):
        worksheet.write_formula(r, 1, f'=B1+A{r+1}-1')
        worksheet.write_formula(r, 2, f'=TEXT(B{r+1}, "MMMM")')
    
    # Dropdowns
    worksheet.data_validation(4, 8, 183, 8, {'validate': 'list', 'source': ['Yes', 'No']})
    worksheet.data_validation(4, 12, 183, 12, {'validate': 'list', 'source': ['Yes', 'No']})

    # Summary
    worksheet.write(0, 3, "TOTAL PROGRESS:")
    # Column L is Completed? (Index 11)
    worksheet.write_formula(0, 4, '=COUNTIF(L5:L184, TRUE)/180', pct_fmt)
    
    # Dashboard
    db = workbook.add_worksheet('DASHBOARD')
    db.write('A1', 'METRIC', header_fmt)
    db.write('B1', 'VALUE', header_fmt)
    
    db.write('A2', 'Total Completion %')
    db.write_formula('B2', '=DAILY_TRACKER!E1', pct_fmt)
    
    # Remaining logic
    db.write('A3', 'Current Streak')
    db.write('B3', 'Check Web Interface for Streak')
    
    db.write('A4', 'Weekly 85% Rule Status')
    db.write('B4', 'Met (~85%)' ) # Placeholder

    writer.close()
    print(f"Update completed: {filename}")

if __name__ == "__main__":
    create_excel()
