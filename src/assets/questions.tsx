export const Questions = [
    {
        "exam": "Practice Exam 2",
        "questions": [
            {
                "question": "A global company with a large number of AWS accounts is seeking a way in which they can centrally manage billing and security policies across all accounts. Which AWS Service will assist them in meeting these goals?",
                "answers": ["A. AWS Organizations", "B. AWS Trusted Advisor", "C. IAM User Groups", "D. AWS Config"],
                "solution": "A"
            },
            {
                "question": "Which service provides object-level storage in AWS?",
                "answers": ["A. Amazon EBS", "B. Amazon Instance Store", "C. Amazon EFS", "D. Amazon S3"],
                "solution": "D"
            },
            {
                "question": "A company is concerned that they are spending money on underutilized compute resources in AWS. Which AWS feature will help ensure that their applications are automatically adding/removing EC2 compute capacity to closely match the required demand?",
                "answers": ["A. AWS Elastic Load Balancer", "B. AWS Budgets", "C. AWS Auto Scaling", "D. AWS Cost Explorer"],
                "solution": "C"
            },
            {
                "question": "Which S3 storage class is best for data with unpredictable access patterns?",
                "answers": ["A. Amazon S3 Intelligent-Tiering", "B. Amazon S3 Glacier Flexible Retrieval", "C. Amazon S3 Standard", "D. Amazon S3 Standard-Infrequent Access"],
                "solution": "A"
            },
            {
                "question": "What is the AWS database service that allows you to upload data structured in key-value format?",
                "answers": ["A. Amazon DynamoDB", "B. Amazon Aurora", "C. Amazon Redshift", "D. Amazon RDS"],
                "solution": "A"
            },
            {
                "question": "Which of the following is NOT correct regarding Amazon EC2 On-demand instances?",
                "answers": ["A. You have to pay a start-up fee when launching a new instance for the first time", "B. The on-demand instances follow the AWS pay-as-you-go pricing model", "C. With on-demand instances, no longer-term commitments or upfront payments are needed", "D. When using on-demand Linux instances, you are charged per second based on an hourly rate"],
                "solution": "A"
            },
            {
                "question": "A company has moved to AWS recently. Which of the following AWS Services will help ensure that they have the proper security settings? (Choose TWO)",
                "answers": ["A. AWS Trusted Advisor", "B. Amazon Inspector", "C. Amazon SNS", "D. Amazon CloudWatch", "E. Concierge Support Team"],
                "solution": "A, B"
            },
            {
                "question": "What is the AWS feature that provides an additional level of security above the default authentication mechanism of usernames and passwords?",
                "answers": ["A. Encrypted keys", "B. Email verification", "C. AWS KMS", "D. AWS MFA"],
                "solution": "D"
            },
            {
                "question": "A company is introducing a new product to their customers, and is expecting a surge in traffic to their web application. As part of their Enterprise Support plan, which of the following provides the company with architectural and scaling guidance?",
                "answers": ["A. AWS Knowledge Center", "B. AWS Health Dashboard", "C. Infrastructure Event Management", "D. AWS Support Concierge Service"],
                "solution": "C"
            },
            {
                "question": "You work as an on-premises MySQL DBA. The work of database configuration, backups, patching, and DR can be time-consuming and repetitive. Your company has decided to migrate to the AWS Cloud. Which of the following can help save time on database maintenance so you can focus on data architecture and performance?",
                "answers": ["A. Amazon RDS", "B. Amazon Redshift", "C. Amazon DynamoDB", "D. Amazon CloudWatch"],
                "solution": "A"
            },
            {
                "question": "Which of the below is a best-practice when designing solutions on AWS?",
                "answers": ["A. Invest heavily in architecting your environment, as it is not easy to change your design later", "B. Use AWS reservations to reduce costs when testing your production environment", "C. Automate wherever possible to make architectural experimentation easier", "D. Provision a large compute capacity to handle any spikes in load"],
                "solution": "C"
            },
            {
                "question": "According to the AWS Acceptable Use Policy, which of the following statements is true regarding penetration testing of EC2 instances?",
                "answers": ["A. Penetration testing is not allowed in AWS", "B. Penetration testing is performed automatically by AWS to determine vulnerabilities in your AWS infrastructure", "C. Penetration testing can be performed by the customer on their own instances without prior authorization from AWS", "D. The AWS customers are only allowed to perform penetration testing on services managed by AWS"],
                "solution": "C"
            },
            {
                "question": "Which service is used to ensure that messages between software components are not lost if one or more components fail?",
                "answers": ["A. Amazon SQS", "B. Amazon SES", "C. AWS Direct Connect", "D. Amazon Connect"],
                "solution": "A"
            },
            {
                "question": "The principle 'design for failure and nothing will fail' is very important when designing your AWS Cloud architecture. Which of the following would help adhere to this principle? (Choose TWO)",
                "answers": ["A. Multi-factor authentication", "B. Availability Zones", "C. Elastic Load Balancing", "D. Penetration testing", "E. Vertical Scaling"],
                "solution": "B, C"
            },
            {
                "question": "What is the AWS service that provides a virtual network dedicated to your AWS account?",
                "answers": ["A. AWS VPN", "B. AWS Subnets", "C. AWS Dedicated Hosts", "D. Amazon VPC"],
                "solution": "D"
            },
            {
                "question": "According to the AWS Shared responsibility model, which of the following are the responsibility of the customer? (Choose TWO)",
                "answers": ["A. Managing environmental events of AWS data centers", "B. Protecting the confidentiality of data in transit in Amazon S3", "C. Controlling physical access to AWS Regions", "D. Ensuring that the underlying EC2 host is configured properly", "E. Patching applications installed on Amazon EC2"],
                "solution": "B, E"
            },
            {
                "question": "Which of the following AWS services can be used as a compute resource? (Choose TWO)",
                "answers": ["A. Amazon VPC", "B. Amazon CloudWatch", "C. Amazon S3", "D. Amazon EC2", "E. AWS Lambda"],
                "solution": "D, E"
            },
            {
                "question": "Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?",
                "answers": ["A. Amazon EBS", "B. Amazon SQS", "C. Amazon S3", "D. Amazon Instance store"],
                "solution": "C"
            },
            {
                "question": "Which of the following is equivalent to a user name and password and is used to authenticate your programmatic access to AWS services and APIs?",
                "answers": ["A. Instance Password", "B. Key pairs", "C. Access Keys", "D. MFA"],
                "solution": "C"
            },
            {
                "question": "What does Amazon ElastiCache provide?",
                "answers": ["A. In-memory caching for read-heavy applications", "B. An Ehcache compatible in-memory data store", "C. An online software store that allows Customers to launch pre-configured software with just few clicks", "D. A domain name system in the cloud"],
                "solution": "A"
            },
            {
                "question": "What is the AWS service that enables you to manage all of your AWS accounts from a single master account?",
                "answers": ["A. AWS WAF", "B. AWS Trusted Advisor", "C. AWS Organizations", "D. Amazon Config"],
                "solution": "C"
            },
            {
                "question": "Which of the following EC2 instance purchasing options supports the Bring Your Own License (BYOL) model for almost every BYOL scenario?",
                "answers": ["A. Dedicated Instances", "B. Dedicated Hosts", "C. On-demand Instances", "D. Reserved Instances"],
                "solution": "B"
            },
            {
                "question": "Which of the following is one of the benefits of moving infrastructure from an on-premises data center to AWS?",
                "answers": ["A. Free support for all enterprise customers", "B. Automatic data protection", "C. Reduced Capital Expenditure (CapEx)", "D. AWS holds responsibility for managing customer applications"],
                "solution": "C"
            },
            {
                "question": "Which of the following are important design principles you should adopt when designing systems on AWS? (Choose TWO)",
                "answers": ["A. Build Tightly-coupled components", "B. Build loosely-coupled components", "C. Design for automated recovery from failure", "D. Focus on the technical aspects of the application", "E. Prioritize monolithic architecture"],
                "solution": "B, C"
            },
            {
                "question": "When using Amazon IAM, what authentication methods are available to use?",
                "answers": ["A. User name/Password, MFA, Access Keys", "B. User name/Password, AWS KMS, Access Keys", "C. User name/Password, AWS KMS, CloudHSM", "D. AWS Certificate Manager, MFA, CloudHSM"],
                "solution": "A"
            },
            {
                "question": "What does Amazon CloudFront use to distribute content to global users with low latency?",
                "answers": ["A. Data centers", "B. Virtual Private Cloud", "C. Edge Locations", "D. Regional Edge Caches"],
                "solution": "C"
            },
            {
                "question": "How does AWS Trusted Advisor provide guidance to users of the AWS Cloud?",
                "answers": ["A. AWS Trusted Advisor automatically corrects issues on your behalf to optimize your AWS environment", "B. AWS Trusted Advisor provides real-time guidance to help you provision your resources following AWS best practices", "C. AWS Trusted Advisor provides 24/7 access to an AWS Support Representative", "D. AWS Trusted Advisor maintains the underlying infrastructure and is managed by AWS"],
                "solution": "B"
            },
            {
                "question": "Which AWS Cloud best practice supports the idea of immutable infrastructure?",
                "answers": ["A. Reduce the blast radius", "B. Allow for evolutionary architectures", "C. Automate the release process", "D. Anticipate failure"],
                "solution": "C"
            },
            {
                "question": "Which of the following AWS Support plans gives access to online training with self-paced labs?",
                "answers": ["A. Enterprise", "B. Business", "C. Basic", "D. Developer"],
                "solution": "A"
            },
            {
                "question": "Which of the following provides a virtually unlimited amount of storage?",
                "answers": ["A. Amazon S3", "B. Amazon EBS", "C. Amazon Instance Store", "D. Amazon RDS"],
                "solution": "A"
            },
            {
                "question": "Under the AWS Shared responsibility model, which of the following are the responsibility of the customer? (Choose TWO)",
                "answers": ["A. Protecting the global infrastructure", "B. Managing the network infrastructure", "C. Configuring network access control lists (ACLs)", "D. Patching the underlying hypervisor", "E. Setting up server-side encryption"],
                "solution": "C, E"
            }
        ]
    }
]
