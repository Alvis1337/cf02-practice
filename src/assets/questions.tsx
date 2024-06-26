export const Questions = [
    {
        "name": "Practice Exam 1",
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
    },
    {
        "name": "Practice Exam 2",
        "questions": [
            {
                "question": "An administrator needs to rapidly deploy a popular IT solution and start using it immediately. Where can the administrator find assistance?",
                "answers": [
                    "A. AWS Well-Architected Framework documentation.",
                    "B. Amazon CloudFront.",
                    "C. AWS CodeCommit.",
                    "D. AWS Quick Start reference deployments."
                ],
                "solution": "D"
            },
            {
                "question": "What is one of the advantages of the Amazon Relational Database Service (Amazon RDS)?",
                "answers": [
                    "A. It simplifies relational database administration tasks.",
                    "B. It provides 99.99999999999% reliability and durability.",
                    "C. It automatically scales databases for loads.",
                    "D. It enables users to dynamically adjust CPU and RAM resources."
                ],
                "solution": "A"
            },
            {
                "question": "Which of the following AWS Cloud services can be used to run a customer-managed relational database?",
                "answers": [
                    "A. Amazon EC2.",
                    "B. Amazon Route 53.",
                    "C. Amazon ElastiCache.",
                    "D. Amazon DynamoDB."
                ],
                "solution": "A"
            },
            {
                "question": "A user is planning to launch two additional Amazon EC2 instances to increase availability. Which action should the user take?",
                "answers": [
                    "A. Launch the instances across multiple Availability Zones in a single AWS Region.",
                    "B. Launch the instances as EC2 Reserved Instances in the same AWS Region and the same Availability Zone.",
                    "C. Launch the instances in multiple AWS Regions but in the same Availability Zone.",
                    "D. Launch the instances as EC2 Spot Instances in the same AWS Region but in different Availability Zones."
                ],
                "solution": "A"
            },
            {
                "question": "Which of the following can limit Amazon Simple Storage Service (Amazon S3) bucket access to specific users?",
                "answers": [
                    "A. A public and private key-pair.",
                    "B. Amazon Inspector.",
                    "C. AWS Identity and Access Management (IAM) policies.",
                    "D. Security Groups."
                ],
                "solution": "C"
            },
            {
                "question": "Which AWS service allows companies to connect an Amazon VPC to an on-premises data center? (Select TWO)",
                "answers": [
                    "A. AWS VPN.",
                    "B. Amazon Redshift.",
                    "C. API Gateway.",
                    "D. Amazon Direct Connect."
                ],
                "solution": "A, D"
            },
            {
                "question": "Which AWS service or feature can be used to monitor CPU usage?",
                "answers": [
                    "A. AWS CloudTrail.",
                    "B. VPC Flow Logs.",
                    "C. Amazon CloudWatch.",
                    "D. AWS Config."
                ],
                "solution": "C"
            },
            {
                "question": "Which task is AWS responsible for in the shared responsibility model for security and compliance?",
                "answers": [
                    "A. Granting access to individuals and services.",
                    "B. Encrypting data in transit.",
                    "C. Updating Amazon EC2 host firmware.",
                    "D. Updating operating systems."
                ],
                "solution": "C"
            },
            {
                "question": "Which of the following security-related actions are available at no cost?",
                "answers": [
                    "A. Calling AWS Support.",
                    "B. Contacting AWS Professional Services to request a workshop.",
                    "C. Accessing forums, blogs, and whitepapers.",
                    "D. Attending AWS classes at a local university."
                ],
                "solution": "C"
            },
            {
                "question": "Which storage service can be used as a low-cost option for hosting static websites?",
                "answers": [
                    "A. Amazon Glacier.",
                    "B. Amazon DynamoDB.",
                    "C. Amazon Elastic File System (Amazon EFS).",
                    "D. Amazon Simple Storage Service (Amazon S3)."
                ],
                "solution": "D"
            },
            {
                "question": "According to the AWS shared responsibility model what is the sole responsibility of AWS?",
                "answers": [
                    "A. Application security.",
                    "B. Edge location management.",
                    "C. Patch management.",
                    "D. Client-side data."
                ],
                "solution": "B"
            },
            {
                "question": "Which of the following are pillars of the AWS Well-Architected Framework? (Select TWO)",
                "answers": [
                    "A. Multiple Availability Zones.",
                    "B. Performance efficiency.",
                    "C. Security.",
                    "D. Encryption usage.",
                    "E. High availability."
                ],
                "solution": "B, C"
            },
            {
                "question": "Which AWS service identifies security groups that allow unrestricted access to a user’s AWS resources?",
                "answers": [
                    "A. AWS Trusted Advisor.",
                    "B. Amazon Inspector.",
                    "C. Amazon CloudWatch.",
                    "D. AWS CloudTrail."
                ],
                "solution": "A"
            },
            {
                "question": "Which design principles for cloud architecture are recommended when re-architecting a large monolithic application? (Select TWO)",
                "answers": [
                    "A. Use manual monitoring.",
                    "B. Use fixed servers.",
                    "C. Implement loose coupling.",
                    "D. Rely on individual components.",
                    "E. Design for scalability."
                ],
                "solution": "C, E"
            },
            {
                "question": "When architecting cloud applications, which of the following are a key design principle?",
                "answers": [
                    "A. Use the largest instance possible.",
                    "B. Provision capacity for peak load.",
                    "C. Use the Scrum development process.",
                    "D. Implement elasticity."
                ],
                "solution": "D"
            },
            {
                "question": "A company has deployed several relational databases on Amazon EC2 instances. Every month the database software vendor releases new security patches that need to be applied to the databases. What is the MOST efficient way to apply the security patches?",
                "answers": [
                    "A. Connect to each database instance on a monthly basis and download and apply the necessary security patches from the vendor.",
                    "B. Enable automate patching for the instances using the Amazon RDS console.",
                    "C. In AWS Config. configure a rule for the instances and the required patch level.",
                    "D. Use AWS Systems Manager to automate database patching according to a schedule."
                ],
                "solution": "D"
            },
            {
                "question": "Which mechanism allows developers to access AWS services from application code?",
                "answers": [
                    "A. AWS Software Development Kit.",
                    "B. AWS Management Console.",
                    "C. AWS CodePipeline.",
                    "D. AWS Config."
                ],
                "solution": "A"
            },
            {
                "question": "Which AWS feature will reduce the customer’s total cost of ownership (TCO)?",
                "answers": [
                    "A. Shared responsibility security model.",
                    "B. Single tenancy.",
                    "C. Elastic computing.",
                    "D. Encryption."
                ],
                "solution": "C"
            },
            {
                "question": "Which of the following is a benefit of using the AWS Cloud?",
                "answers": [
                    "A. Permissive security removes the administrative burden.",
                    "B. Ability to focus on revenue-generating activities.",
                    "C. Control over cloud network hardware.",
                    "D. Choice of specific cloud hardware vendors."
                ],
                "solution": "B"
            },
            {
                "question": "Which of the following are categories of AWS Trusted Advisor? (Select TWO)",
                "answers": [
                    "A. Fault Tolerance.",
                    "B. Instance Usage.",
                    "C. Infrastructure.",
                    "D. Performance.",
                    "E. Storage Capacity."
                ],
                "solution": "A, D"
            },
            {
                "question": "What is Amazon CloudWatch?",
                "answers": [
                    "A. A code repository with customizable build and team commit features.",
                    "B. A metrics repository with customizable notification thresholds and channels.",
                    "C. A security configuration repository with threat analytics.",
                    "D. A rule repository of a web application firewall with automated vulnerability prevention features."
                ],
                "solution": "B"
            },
            {
                "question": "Under the AWS shared responsibility model, which of the following activities are the customer’s responsibility? (Select TWO)",
                "answers": [
                    "A. Patching operating system components for Amazon Relational Database Server (Amazon RDS).",
                    "B. Encrypting data on the client-side.",
                    "C. Training the data center staff.",
                    "D. Configuring Network Access Control Lists (ACL).",
                    "E. Maintaining environmental controls within a data center."
                ],
                "solution": "B, D"
            },
            {
                "question": "Under the shared responsibility model, which of the following is a shared control between a customer and AWS?",
                "answers": [
                    "A. Physical controls.",
                    "B. Patch management.",
                    "C. Zone security.",
                    "D. Data center auditing."
                ],
                "solution": "B"
            },
            {
                "question": "Which of the following is a benefit of loose coupling as it relates to software architecture?",
                "answers": [
                    "A. It enables applications to have tightly integrated dependencies.",
                    "B. It allows companies to focus on their physical data center operations.",
                    "C. It facilitates quicker updates and implementation of new features.",
                    "D. It allows applications to implement relational database schemas."
                ],
                "solution": "C"
            },
            {
                "question": "Which of the following can be used to identity a specific user who terminated an Amazon EC2 instance?",
                "answers": [
                    "A. Amazon Inspector.",
                    "B. AWS Trusted Advisor.",
                    "C. AWS CloudTrail.",
                    "D. AWS Config."
                ],
                "solution": "C"
            },
            {
                "question": "Which of the following tasks is the responsibility of AWS?",
                "answers": [
                    "A. Encrypting client-side data.",
                    "B. Configuring security settings on the Amazon EC2 instances.",
                    "C. Patching the network infrastructure.",
                    "D. Setting user password policies."
                ],
                "solution": "C"
            },
            {
                "question": "Which AWS services can be used to improve network security? (Select TWO)",
                "answers": [
                    "A. AWS Trusted Advisor.",
                    "B. Amazon CloudFront.",
                    "C. AWS Direct Connect.",
                    "D. AWS WAF."
                ],
                "solution": "B, D"
            },
            {
                "question": "A company wants to be notified via email of any changes to the security group of a particular Amazon EC2 instance. Which AWS service can be used to achieve this?",
                "answers": [
                    "A. AWS Config.",
                    "B. AWS Service Catalog.",
                    "C. AWS Trusted Advisor.",
                    "D. Amazon Inspector."
                ],
                "solution": "A"
            }
        ]
    }
]
