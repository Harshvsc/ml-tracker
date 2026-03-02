import pandas as pd
import datetime
import re

def split_tasks(day, focus, topic, sub, task_str):
    # Synchronized splitting logic
    tasks_parts = re.split(r'\. |; |\n|🔹', task_str)
    refined = []
    for part in tasks_parts:
        part = part.strip()
        if part and not part.startswith('Day'):
            refined.append([day, focus, topic, sub, part])
    return refined

def generate_granular_roadmap():
    raw_days = []
    
    m1_focus = "Python + SQL Lock"
    raw_days.append([1, m1_focus, "Python Basics", "Start", "Variables & Data Types (write 20 examples). Type conversion exercises (10 examples). Install Python + VS Code + Git. Setup project folder. Deliverable: day1_basics.py"])
    raw_days.append([2, m1_focus, "Python Basics", "Functions", "Functions (write 10 custom functions). Default arguments. Return values. Practice 5 small logic problems. Deliverable: functions_practice.py"])
    raw_days.append([3, m1_focus, "Python Basics", "Control Flow", "Loops (for/while). 10 loop exercises. List comprehension (5 examples). Debugging practice."])
    raw_days.append([4, m1_focus, "SQL", "Basics", "SQL: SELECT. WHERE. 15 filtering problems."])
    raw_days.append([5, m1_focus, "SQL", "Aggregation", "SQL: GROUP BY. COUNT, SUM, AVG. 15 aggregation problems."])
    raw_days.append([6, m1_focus, "Python OOP", "Core", "Python OOP: Classes, objects. Create 3 real-world classes (BankAccount, Student, Product). Solve 5 OOP problems."])
    raw_days.append([7, m1_focus, "SQL", "Joins", "SQL INNER JOIN (15 problems). SQL LEFT JOIN (10 problems). Revise previous mistakes."])
    raw_days.append([8, m1_focus, "Python Integration", "Files", "Python: File Handling (read/write CSV). Build CSV reader script. SQL: 10 problems mixed."])
    raw_days.append([9, m1_focus, "SQL", "Nesting", "SQL Subqueries (15 problems). Practice nested queries."])
    raw_days.append([10, m1_focus, "Python", "Errors", "Python: Exception handling. Write 5 try-except use cases. Debug broken code."])
    raw_days.append([11, m1_focus, "SQL", "Analysis", "SQL Window Functions (ROW_NUMBER, RANK, DENSE_RANK). 15 problems."])
    raw_days.append([12, m1_focus, "Python", "Environment", "Python: Modules & virtual environments. Structure mini project folder properly."])
    raw_days.append([13, m1_focus, "SQL", "Speed", "SQL 20 mixed problems (timed)."])
    raw_days.append([14, m1_focus, "Project", "Cleaner", "Build Python Mini Project #1 (CSV data cleaner)."])
    raw_days.append([15, m1_focus, "SQL", "Opt", "SQL Index basics (conceptual). 15 optimization-style problems."])
    raw_days.append([16, m1_focus, "Python", "DevOps", "Python Logging. Add logging to project."])
    raw_days.append([17, m1_focus, "SQL", "Daily", "SQL 20 problems."])
    raw_days.append([18, m1_focus, "Python", "Refactor", "Python: Refactor mini project cleanly."])
    raw_days.append([19, m1_focus, "SQL", "Daily", "SQL 20 problems."])
    raw_days.append([20, m1_focus, "Project", "API", "Build Python Mini Project #2 (API fetch script)."])
    raw_days.append([21, m1_focus, "SQL", "Check", "Full SQL revision. Identify weak patterns."])
    for d in range(22, 27): raw_days.append([d, m1_focus, "SQL", "Intensive", "15 SQL problems daily (75 total). Practice complex filters."])
    raw_days.append([27, m1_focus, "SQL", "Mock", "SQL Mock test (timed). Review all day 1-27 topics."])
    raw_days.append([28, m1_focus, "SQL", "Fix", "Debug weak SQL areas. Re-solve 10 hard problems."])
    raw_days.append([29, m1_focus, "GitHub", "Portfolio", "Clean GitHub structure. Write clean commit messages."])
    raw_days.append([30, m1_focus, "Check", "Milestone", "Final SQL test (100 problems complete milestone). Month 1 review."])

    m2_focus = "Pandas + ML Fundamentals"
    raw_days.append([31, m2_focus, "NumPy", "Arrays", "NumPy arrays & operations. Performance checks. Indexing."])
    raw_days.append([32, m2_focus, "NumPy", "Logic", "Broadcasting & indexing. Vectorized logic. Multi-dim slicing."])
    raw_days.append([33, m2_focus, "Pandas", "IO", "Pandas DataFrame basics. Read CSV, Excel, SQL. head, tail, info."])
    raw_days.append([34, m2_focus, "Pandas", "Cleaning", "Data cleaning (missing values). fillna, dropna, interpolate. Type conversion."])
    raw_days.append([35, m2_focus, "Pandas", "FE", "Feature engineering. Creating new features. Binning. Dummies."])
    raw_days.append([36, m2_focus, "EDA", "Analysis", "EDA (grouping, summary stats). Pivot tables. Crosstab logic."])
    raw_days.append([37, m2_focus, "Visualization", "Basics", "Visualization (Matplotlib). Line charts. Bar plots. Customizing axes."])
    raw_days.append([38, m2_focus, "Visualization", "Advanced", "Seaborn plots. Heatmaps. Jointplots. Pairplots. Styling."])
    raw_days.append([39, m2_focus, "ML Theory", "Linear", "Linear Regression theory. OLS math. Assumptions check."])
    raw_days.append([40, m2_focus, "ML Code", "Linear", "Implement Linear Regression. Scikit-learn usage. Model coefficients interpretation."])
    raw_days.append([41, m2_focus, "ML Theory", "Logistic", "Logistic Regression theory. Sigmoid function. Log loss."])
    raw_days.append([42, m2_focus, "ML Code", "Logistic", "Implement Logistic Regression. Binary classification task. Thresholding."])
    raw_days.append([43, m2_focus, "ML Metrics", "Score", "Metrics (precision, recall, F1, ROC). Confusion matrix analysis."])
    raw_days.append([44, m2_focus, "ML Stats", "Validate", "Cross-validation. K-fold logic. Stratification."])
    raw_days.append([45, m2_focus, "Algorithms", "Tree", "Decision Trees. Splitting criteria (Gini, Entropy). Pruning."])
    raw_days.append([46, m2_focus, "Algorithms", "Ensemble", "Random Forest. Bagging. Feature importance."])
    raw_days.append([47, m2_focus, "Algorithms", "Boost", "XGBoost basics. Boosting logic vs Bagging."])
    for d in range(48, 53): raw_days.append([d, m2_focus, "Project", "Reg", f"Build Regression Project (Day {d-47}/5). Cleaning. Training. Evaluation."])
    for d in range(53, 58): raw_days.append([d, m2_focus, "Project", "Class", f"Build Classification Project (Day {d-52}/5). Imbalance. Metrics. Optimization."])
    for d in range(58, 61): raw_days.append([d, m2_focus, "GitHub", "Docs", "Improve documentation. GitHub polish. Write high-quality README."])

    # Expansion for Month 3-5 to match Web logic
    dl_str = "Tensors. Autograd. Training loop. Loss functions. Optimizers. Custom Dataset class. CNN basics. Model saving/loading. FastAPI basics. Create inference endpoint. Connect model."
    for d in range(61, 91): raw_days.append([d, "PyTorch + DL Project", "DL", "Module", dl_str])
    
    spark_str = "Install Spark. RDD vs DataFrame. Transformations. Joins & aggregations. Partitioning. Large dataset simulation. ML training in Spark. Build ML batch pipeline."
    for d in range(91, 121): raw_days.append([d, "PySpark + Pipeline", "Spark", "Module", spark_str])
    
    ops_str = "Docker basics. Dockerfile. Containerize ML app. EC2 setup. S3 usage. IAM basics. Deploy ML API. Debug & test endpoint."
    for d in range(121, 151): raw_days.append([d, "Docker + AWS", "Ops", "Module", ops_str])

    for d in range(151, 181):
        task_str = "1 DSA problem. 1 SQL revision. 1 ML theory topic. Apply to 10 jobs."
        if d % 7 == 0: task_str += " Mock interview. Resume update. LinkedIn outreach."
        raw_days.append([d, "Job Mode", "Job Hunt", "Interviews", task_str])

    granular_tasks = []
    for day_data in raw_days:
        granular_tasks.extend(split_tasks(*day_data))
    
    return granular_tasks

def create_excel():
    data = generate_granular_roadmap()
    df = pd.DataFrame(data, columns=['Day Number', 'Focus Area', 'Main Topic', 'Subtopic', 'Exact Task To Do Today'])
    df['Completed?'] = False
    total_topics = len(df)
    filename = "/Users/admin/Downloads/tracker/180_Day_ML_Job_Prep_Tracker_Granular.xlsx"
    writer = pd.ExcelWriter(filename, engine='xlsxwriter')
    df.to_excel(writer, sheet_name='DAILY_TRACKER', index=False, startrow=3)
    workbook = writer.book
    worksheet = writer.sheets['DAILY_TRACKER']
    worksheet.write(0, 0, "TOTAL TOPICS:")
    worksheet.write(0, 1, total_topics)
    worksheet.write(1, 0, "PROGRESS %:")
    worksheet.write_formula(1, 1, f'=COUNTIF(F5:F{len(df)+4}, TRUE)/{total_topics}', workbook.add_format({'num_format': '0%', 'bold': True}))
    writer.close()
    print(f"Excel synchronized with {total_topics} items.")

if __name__ == "__main__":
    create_excel()
