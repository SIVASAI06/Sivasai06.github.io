const experienceData = [
  {
    client: "Health Plus Technologies",
    role: "Azure Data Scientist ML/AI Engineer",
    location: "New York, USA",
    startDate: "Mar 2024",
    endDate: "Present",
    project: "Patient Re-admission Prediction Model",
    description: "Developed and deployed a predictive model to identify patients at high risk of hospital re-admission within 30 days, enabling proactive care planning and reducing readmission rates. This model was integrated with the healthcare provider's patient management system to provide real-time risk scores for clinical staff.",
    responsibilities: [
      "Collected and prepared patient data from Azure Data Lake, including demographics, medical history, and previous admission details.",
      "Conducted data cleaning and preprocessing using Azure Databricks, performing feature engineering (e.g., number of previous admissions, diagnosis type) to improve model quality.",
      "Built a logistic regression model with Azure ML to classify patients as high or low risk for readmission. Performed hyperparameter tuning to optimize model performance.",
      "Achieved a final model accuracy of 88%, meeting clinical accuracy requirements for effective early intervention.",
      "Deployed the model on Azure Kubernetes Service (AKS) to enable real-time predictions within the patient management system, allowing healthcare teams to prioritize high-risk patients.",
      "Set up an MLOps pipeline with Azure DevOps for continuous integration and deployment, ensuring the model remains up to date with evolving patient data.",
      "Reduced hospital readmission rates by 18%, supporting better patient outcomes and optimizing resource allocation.",
      "Enabled clinical staff to focus on at-risk patients, leading to improved patient care and reduced costs associated with readmissions."
    ],
    technicalSkills: ["Azure ML", "AKS", "Azure Data Lake", "Azure Databricks", "logistic regression", "MLOps", "CI/CD", "real-time inference"]
  },
  {
    client: "Acme Corp",
    role: "Azure Data Engineer",
    location: "San Francisco, USA",
    startDate: "Jan 2023",
    endDate: "Mar 2024",
    project: "E-commerce Analytics Pipeline",
    description: "Designed and implemented an ETL pipeline to handle e-commerce sales data, improving data availability and quality for analytics. The pipeline automated data ingestion from various sources, processed data using Azure Data Factory, and stored it in Azure Synapse Analytics for efficient querying and reporting.",
    responsibilities: [
      "Analyzed data requirements and built an Azure Data Factory pipeline to automate data ingestion from disparate e-commerce sources, including transactional databases and external APIs.",
      "Configured Azure Data Lake for data staging, enabling scalable and organized storage of raw data.",
      "Developed data transformation workflows within Azure Data Factory, handling data cleaning, normalization, and aggregation to create a unified view of sales performance.",
      "Applied data enrichment techniques, adding external data (e.g., customer demographics) to support advanced analytics and customer segmentation.",
      "Stored transformed data in Azure Synapse Analytics, creating a data model optimized for reporting and machine learning.",
      "Implemented indexing and partitioning strategies to reduce query response times by 35%, enabling faster data access for analytics.",
      "Reduced manual data processing efforts by 50%, providing timely data for analysis and reporting.",
      "Improved data retrieval speeds, supporting daily analytics reports for sales and customer insights."
    ],
    technicalSkills: ["Azure Data Factory", "Azure Data Lake", "Azure Synapse Analytics", "ETL pipeline design", "data transformation", "data optimization"]
  },
  {
    client: "Infosys Ltd.",
    role: "Data Analyst",
    location: "Bengaluru, India",
    startDate: "July 2021",
    endDate: "July 2022",
    project: "Economic Indicator Dashboard",
    description: "Developed an interactive Power BI dashboard for state-level decision-makers, visualizing key economic indicators such as GDP, employment rates, and industry performance. This project streamlined the analysis of economic trends and supported timely data-driven policy decisions.",
    responsibilities: [
      "Extracted datasets from government and external sources using SQL queries, ensuring data consistency across various economic metrics.",
      "Cleaned and transformed data to handle missing values, normalize metrics, and prepare the dataset for visualization, improving data accuracy.",
      "Conducted exploratory data analysis (EDA) to identify key economic metrics and trends, collaborating with stakeholders to define relevant KPIs.",
      "Used Python and SQL for initial analysis, creating foundational reports on unemployment, industry growth, and GDP, which served as input for the dashboard.",
      "Designed a user-friendly Power BI dashboard that allowed stakeholders to explore data through interactive charts, filters, and drill-down options.",
      "Created calculated fields and metrics for custom KPIs, providing stakeholders with insights on economic trends and patterns for informed decision-making.",
      "Reduced data analysis time by 30%, making it faster for decision-makers to access and act on current economic data.",
      "Increased usage of data insights across departments by 40%, enhancing collaboration and data-informed strategies in policymaking."
    ],
    technicalSkills: ["Power BI", "SQL", "Python", "data cleaning", "EDA", "KPI definition"]
  }
];