export default [
  {
    title: "Overcrowd Reporting & Redirect System",
    imgUrl: "/assets/overcrowd-reporting.svg",
    stack: ["Python", "Google Cloud Functions", "Snowflake", "Slack API", "BigQuery", "Google Secret Manager", "Flask"],
    summary:
      "Automated hourly Slack alerts for overcrowded bike parking bays across five London boroughs, with in-Slack task assignment for field workers and full BigQuery audit logging.",
    problem:
      "Field operations teams needed real-time visibility into overcrowded bike bay locations across multiple London boroughs, but manual monitoring was slow and inconsistent.",
    approach:
      "Built a suite of Google Cloud Functions — one per borough — that query a Snowflake data warehouse on an hourly Cloud Scheduler trigger, identify the most overcrowded bays using geospatial filtering, and post formatted Slack alerts with direct Google Maps links and action buttons. A companion Flask service handles Slack button interactions, routing task-acceptance events to BigQuery for compliance audit trails. All credentials are managed through Google Secret Manager.",
    impact:
      "Replaced manual monitoring with an automated pipeline serving multiple boroughs simultaneously. Field workers accept tasks directly in Slack; all interactions are logged to BigQuery for compliance reporting and KPI tracking.",
  },
  {
    title: "Field Staff Daily Briefing System",
    imgUrl: "/assets/daily-briefing.png",
    stack: ["Python", "Google Cloud Functions", "Slack API", "Google Sheets API", "Cloud Scheduler"],
    summary:
      "Personalised morning Slack DMs to foot patrol workers containing only their zone briefing notes for the day, replacing weekly batch posts that got buried and ignored.",
    problem:
      "Weekly batch zone briefing posts to Slack were being ignored — information posted once at the start of the week was quickly buried and easily missed by field patrol workers.",
    approach:
      "Built a Python service that reads the weekly schedule from Google Sheets each morning and sends a personalised Slack DM to each worker on shift, containing only the zone notes relevant to their assignment that day. A name-to-Slack-ID resolution pipeline handles edge cases with a self-growing cache written back to Sheets. Acknowledgement is tracked via emoji reactions, avoiding the need for a public inbound webhook. Cloud Scheduler triggers the send in the morning and a read-confirmation check an hour later.",
    impact:
      "Eliminated the ignored-batch-post problem by delivering targeted, timely briefings directly to each worker on the morning they need it. Read-confirmation tracking gave operations managers visibility into who had and hadn't acknowledged their briefing.",
  },
  {
    title: "Compliance Photo QA",
    imgUrl: "/assets/compliance-photo-qa.svg",
    stack: ["Python", "Google Gemini Vision API", "Slack API", "Google Cloud Storage", "Google Cloud Functions"],
    summary:
      "A Cloud Function that uses Google Gemini Vision AI to automatically verify compliance photos submitted by field patrol workers to Slack, eliminating the need for manual review.",
    problem:
      "Field patrol workers submit compliance photos to Slack to log their bay visits, but manually reviewing every photo was time-consuming and created a bottleneck at scale.",
    approach:
      "Built a Cloud Function that monitors the compliance Slack channel, retrieves posted images, and submits them to Google's Gemini Vision API with a detailed prompt describing valid vehicle types and compliance criteria. The model evaluates whether the photo meets requirements and returns a structured verdict. Application state is persisted in Google Cloud Storage to avoid reprocessing already-reviewed posts.",
    impact:
      "Automated the photo review workflow, enabling real-time compliance checks at scale without manual reviewer overhead.",
  },
  {
    title: "Cyclist Scheduling Algorithm",
    imgUrl: "/assets/cyclist-scheduling.png",
    stack: ["Python", "Streamlit", "GeoPandas", "Shapely", "Google Maps API", "Google Sheets API"],
    summary:
      "A scheduling algorithm and Streamlit web app that generates weekly cyclist zone assignments by minimising travel distance from each worker's home postcode.",
    problem:
      "Scheduling dozens of cyclists across geographic zones each week was a manual, time-intensive process — workers were often assigned to zones far from their home postcodes.",
    approach:
      "Built a scheduling algorithm that ingests weekly roster exports, resolves each cyclist's home postcode to geographic coordinates, and assigns workers to zones by minimising travel distance using GeoPandas and the Google Maps API. A Streamlit web app provides a non-technical interface for operations managers to run the algorithm and review output without touching the command line.",
    impact:
      "Reduced scheduling time significantly and improved geographic efficiency of assignments. The Streamlit interface made the tool accessible to non-technical stakeholders who previously depended on developer involvement for every scheduling run.",
  },
];
