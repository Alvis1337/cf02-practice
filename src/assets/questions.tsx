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
    },
    {
        "name": "Practice Exam 3", "questions": [
            {
                "question": "AWS allows users to manage their resources using a web based user interface. What is the name of this interface?",
                "answers": [
                    "A. AWS CLI.",
                    "B. AWS API.",
                    "C. AWS SDK.",
                    "D. AWS Management Console."
                ],
                "solution": "D"
            },
            {
                "question": "Which of the following is an example of horizontal scaling in the AWS Cloud?",
                "answers": [
                    "A. Replacing an existing EC2 instance with a larger, more powerful one.",
                    "B. Increasing the compute capacity of a single EC2 instance to address the growing demands of an application.",
                    "C. Adding more RAM capacity to an EC2 instance.",
                    "D. Adding more EC2 instances of the same size to handle an increase in traffic."
                ],
                "solution": "D"
            },
            {
                "question": "You have noticed that several critical Amazon EC2 instances have been terminated. Which of the following AWS services would help you determine who took this action?",
                "answers": [
                    "A. Amazon Inspector.",
                    "B. AWS CloudTrail.",
                    "C. AWS Trusted Advisor.",
                    "D. EC2 Instance Usage Report."
                ],
                "solution": "B"
            },
            {
                "question": "Which of the below options are related to the reliability of AWS? (Choose TWO)",
                "answers": [
                    "A. Applying the principle of least privilege to all AWS resources.",
                    "B. Automatically provisioning new resources to meet demand.",
                    "C. All AWS services are considered Global Services, and this design helps customers serve their international users.",
                    "D. Providing compensation to customers if issues occur.",
                    "E. Ability to recover quickly from failures.\n"
                ],
                "solution": "B, E"
            },
            {
                "question": "Which statement is true regarding the AWS Shared Responsibility Model?",
                "answers": [
                    "A. Responsibilities vary depending on the services used.",
                    "B. Security of the IaaS services is the responsibility of AWS.",
                    "C. Patching the guest OS is always the responsibility of AWS.",
                    "D. Security of the managed services is the responsibility of the customer."
                ],
                "solution": "A"
            },
            {
                "question": "You have set up consolidated billing for several AWS accounts. One of the accounts has purchased a number of reserved instances for 3 years. Which of the following is true regarding this scenario?",
                "answers": [
                    "A. The Reserved Instance discounts can only be shared with the master account.",
                    "B. All accounts can receive the hourly cost benefit of the Reserved Instances.",
                    "C. The purchased instances will have better performance than On-demand instances.",
                    "D. There are no cost benefits from using consolidated billing; It is for informational purposes only."
                ],
                "solution": "B"
            },
            {
                "question": "A company has developed an eCommerce web application in AWS. What should they do to ensure that the application has the highest level of availability?",
                "answers": [
                    "A. Deploy the application across multiple Availability Zones and Edge locations.",
                    "B. Deploy the application across multiple Availability Zones and subnets.",
                    "C. Deploy the application across multiple Regions and Availability Zones.",
                    "D. Deploy the application across multiple VPC's and subnets."
                ],
                "solution": "C"
            },
            {
                "question": "What does AWS Snowball provide? (Choose TWO)",
                "answers": [
                    "A. Built-in computing capabilities that allow customers to process data locally.",
                    "B. A catalog of third-party software solutions that customers need to build solutions and run their businesses.",
                    "C. A hybrid cloud storage between on-premises environments and the AWS Cloud.",
                    "D. An Exabyte-scale data transfer service that allows you to move extremely large amounts of data to AWS.",
                    "E. Secure transfer of large amounts of data into and out of the AWS."
                ],
                "solution": "A, E"
            },
            {
                "question": "A company has an AWS Enterprise Support plan. They want quick and efficient guidance with their billing and account inquiries. Which of the following should the company use?",
                "answers": [
                    "A. AWS Health Dashboard.",
                    "B. AWS Support Concierge.",
                    "C. AWS Customer Service.",
                    "D. AWS Operations Support."
                ],
                "solution": "B"
            },
            {
                "question": "A Japanese company hosts their applications on Amazon EC2 instances in the Tokyo Region. The company has opened new branches in the United States, and the US users are complaining of high latency. What can the company do to reduce latency for the users in the US while minimizing costs?",
                "answers": [
                    "A. Applying the Amazon Connect latency-based routing policy.",
                    "B. Registering a new US domain name to serve the users in the US.",
                    "C. Building a new data center in the US and implementing a hybrid model.",
                    "D. Deploying new Amazon EC2 instances in a Region located in the US."
                ],
                "solution": "D"
            },
            {
                "question": "An organization has a large number of technical employees who operate their AWS Cloud infrastructure. What does AWS provide to help organize them into teams and then assign the appropriate permissions for each team?",
                "answers": [
                    "A. IAM roles.",
                    "B. IAM users.",
                    "C. IAM user groups.",
                    "D. AWS Organizations."
                ],
                "solution": "C"
            },
            {
                "question": "A company has decided to migrate its Oracle database to AWS. Which AWS service can help achieve this without negatively impacting the functionality of the source database?",
                "answers": [
                    "A. AWS OpsWorks.",
                    "B. AWS Database Migration Service.",
                    "C. AWS Server Migration Service.",
                    "D. AWS Application Discovery Service."
                ],
                "solution": "B"
            },
            {
                "question": "Adjusting compute capacity dynamically to reduce cost is an implementation of which AWS cloud best practice?",
                "answers": [
                    "A. Build security in every layer.",
                    "B. Parallelize tasks.",
                    "C. Implement elasticity.",
                    "D. Adopt monolithic architecture."
                ],
                "solution": "C"
            },
            {
                "question": "What are the benefits of having infrastructure hosted in AWS? (Choose TWO)",
                "answers": [
                    "A. Increasing speed and agility.",
                    "B. There is no need to worry about security.",
                    "C. Gaining complete control over the physical infrastructure.",
                    "D. Operating applications on behalf of customers.",
                    "E. All of the physical security and most of the data/network security are taken care of for you."
                ],
                "solution": "A, E"
            },
            {
                "question": "What is the advantage of the AWS-recommended practice of \"decoupling\" applications?",
                "answers": [
                    "A. Allows treating an application as a single, cohesive unit.",
                    "B. Reduces inter-dependencies so that failures do not impact other components of the application.",
                    "C. Allows updates of any monolithic application quickly and easily.",
                    "D. Allows tracking of any API call made to any AWS service."
                ],
                "solution": "B"
            },
            {
                "question": "Which of the following helps a customer view the Amazon EC2 billing activity for the past month?",
                "answers": [
                    "A. AWS Budgets.",
                    "B. AWS Pricing Calculator.",
                    "C. AWS Systems Manager.",
                    "D. AWS Cost & Usage Reports."
                ],
                "solution": "D"
            },
            {
                "question": "What do you gain from setting up consolidated billing for five different AWS accounts under another master account?",
                "answers": [
                    "A. AWS services' costs will be reduced to half the original price.",
                    "B. The consolidated billing feature is just for organizational purpose.",
                    "C. Each AWS account gets volume discounts.",
                    "D. Each AWS account gets five times the free-tier services capacity."
                ],
                "solution": "C"
            },
            {
                "question": "What should you do in order to keep the data on EBS volumes safe? (Choose TWO)",
                "answers": [
                    "A. Regularly update firmware on EBS devices.",
                    "B. Create EBS snapshots.",
                    "C. Ensure that EBS data is encrypted at rest.",
                    "D. Store a backup daily in an external drive."
                ],
                "solution": "B, C"
            },
            {
                "question": "One of the most important AWS best-practices to follow is the cloud architecture principle of elasticity. How does this principle improve your architecture's design?",
                "answers": [
                    "A. By automatically scaling your on-premises resources based on changes in demand.",
                    "B. By automatically scaling your AWS resources using an Elastic Load Balancer.",
                    "C. By reducing interdependencies between application components wherever possible.",
                    "D. By automatically provisioning the required AWS resources based on changes in demand."
                ],
                "solution": "D"
            },
            {
                "question": "A startup company is operating on limited funds and is extremely concerned about cost overruns. Which of the below options can be used to notify the company when their monthly AWS bill exceeds $2000? (Choose TWO)",
                "answers": [
                    "A. Setup a CloudWatch billing alarm that triggers an SNS notification when the threshold is exceeded.",
                    "B. Configure the Amazon Simple Email Service to send billing alerts to their email address on a daily basis.",
                    "C. Configure the AWS Budgets Service to alert the company when the threshold is exceeded.",
                    "D. Configure AWS CloudTrail to automatically delete all AWS resources when the threshold is exceeded."
                ],
                "solution": "A, C"
            },
            {
                "question": "What does Amazon CloudFront use to distribute content to global users with low latency?",
                "answers": [
                    "A. AWS Global Accelerator.",
                    "B. AWS Regions.",
                    "C. AWS Edge Locations.",
                    "D. AWS Availability Zones."
                ],
                "solution": "C"
            },
            {
                "question": "What does the \"Principle of Least Privilege\" refer to?",
                "answers": [
                    "A. You should grant your users only the permissions they need when they need them and nothing more.",
                    "B. All IAM users should have at least the necessary permissions to access the core AWS services.",
                    "C. All trusted IAM users should have access to any AWS service in the respective AWS account.",
                    "D. IAM users should not be granted any permissions; to keep your account safe."
                ],
                "solution": "A"
            },
            {
                "question": "Which of the following does NOT belong to the AWS Cloud Computing models?",
                "answers": [
                    "A. Platform as a Service (PaaS).",
                    "B. Infrastructure as a Service (IaaS).",
                    "C. Software as a Service (SaaS).",
                    "D. Networking as a Service (NaaS)."
                ],
                "solution": "D"
            },
            {
                "question": "The identification process of an online financial services company requires that new users must complete an online interview with their security team. The completed recorded interviews are only required in the event of a legal issue or a regulatory compliance breach. What is the most cost-effective service to store the recorded videos?",
                "answers": [
                    "A. S3 Intelligent-Tiering.",
                    "B. AWS Marketplace.",
                    "C. Amazon S3 Glacier Deep Archive.",
                    "D. Amazon EBS."
                ],
                "solution": "C"
            },
            {
                "question": "Which service provides DNS in the AWS cloud?",
                "answers": [
                    "A. Route 53.",
                    "B. AWS Config.",
                    "C. Amazon CloudFront.",
                    "D. Amazon EMR."
                ],
                "solution": "A"
            },
            {
                "question": "Hundreds of thousands of DDoS attacks are recorded every month worldwide. What service does AWS provide to help protect AWS Customers from these attacks? (Choose TWO)",
                "answers": [
                    "A. AWS Shield.",
                    "B. AWS Config.",
                    "C. Amazon Cognito.",
                    "D. AWS WAF."
                ],
                "solution": "A, D"
            },
            {
                "question": "A company is deploying a new two-tier web application in AWS. Where should the most frequently accessed data be stored so that the application's response time is optimal?",
                "answers": [
                    "A. AWS OpsWorks.",
                    "B. AWS Storage Gateway.",
                    "C. Amazon EBS volume.",
                    "D. Amazon ElastiCache."
                ],
                "solution": "D"
            },
            {
                "question": "You want to run a questionnaire application for only one day (without interruption), which Amazon EC2 purchase option should you use?",
                "answers": [
                    "A. Reserved instances.",
                    "B. Spot instances.",
                    "C. Dedicated instances.",
                    "D. On-demand instances."
                ],
                "solution": "D"
            },
            {
                "question": "You are working on a project that involves creating thumbnails of millions of images. Consistent uptime is not an issue, and continuous processing is not required. Which EC2 buying option would be the most cost-effective?",
                "answers": [
                    "A. Reserved Instances.",
                    "B. On-demand Instances.",
                    "C. Dedicated Instances.",
                    "D. Spot Instances."
                ],
                "solution": "D"
            },
            {
                "question": "Which of the following can be described as a global content delivery network (CDN) service?",
                "answers": [
                    "A. AWS VPN.",
                    "B. AWS Direct Connect.",
                    "C. AWS Regions.",
                    "D. Amazon CloudFront."
                ],
                "solution": "D"
            },
            {
                "question": "Which of the following services allows customers to manage their agreements with AWS?",
                "answers": [
                    "A. AWS Artifact.",
                    "B. AWS Certificate Manager.",
                    "C. AWS Systems Manager.",
                    "D. AWS Organizations."
                ],
                "solution": "A"
            },
            {
                "question": "Which of the following are examples of AWS-Managed Services, where AWS is responsible for the operational and maintenance burdens of running the service? (Choose TWO)",
                "answers": [
                    "A. Amazon VPC.",
                    "B. Amazon DynamoDB.",
                    "C. Amazon Elastic MapReduce.",
                    "D. AWS IAM."
                ],
                "solution": "B, C"
            },
            {
                "question": "Your company has a data store application that requires access to a NoSQL database. Which AWS database offering would meet this requirement?",
                "answers": [
                    "A. Amazon Aurora.",
                    "B. Amazon DynamoDB.",
                    "C. Amazon Elastic Block Store.",
                    "D. Amazon Redshift."
                ],
                "solution": "B"
            },
            {
                "question": "As part of the Enterprise support plan, who is the primary point of contact for ongoing support needs?",
                "answers": [
                    "A. AWS Identity and Access Management (IAM) user.",
                    "B. Infrastructure Event Management (IEM) engineer.",
                    "C. AWS Consulting Partners.",
                    "D. Technical Account Manager (TAM)."
                ],
                "solution": "D"
            },
            {
                "question": "How can you view the distribution of AWS spending in one of your AWS accounts?",
                "answers": [
                    "A. By using Amazon VPC console.",
                    "B. By contacting the AWS Support team.",
                    "C. By using AWS Cost Explorer.",
                    "D. By contacting the AWS Finance team."
                ],
                "solution": "C"
            },
            {
                "question": "Which of the following must an IAM user provide to interact with AWS services using the AWS Command Line Interface (AWS CLI)?",
                "answers": [
                    "A. Access keys.",
                    "B. Secret token.",
                    "C. UserID.",
                    "D. User name and password."
                ],
                "solution": "A"
            },
            {
                "question": "You have AWS Basic support, and you have discovered that some AWS resources are being used maliciously, and those resources could potentially compromise your data. What should you do?",
                "answers": [
                    "A. Contact the AWS Customer Service team.",
                    "B. Contact the AWS Abuse team.",
                    "C. Contact the AWS Concierge team.",
                    "D. Contact the AWS Security team."
                ],
                "solution": "B"
            },
            {
                "question": "Select TWO examples of the AWS shared controls.",
                "answers": [
                    "A. Patch Management.",
                    "B. IAM Management.",
                    "C. VPC Management.",
                    "D. Configuration Management."
                ],
                "solution": "A, D"
            },
            {
                "question": "In order to implement best practices when dealing with a Single Point of Failure, you should attempt to build as much automation as possible in both detecting and reacting to failure. Which of the following AWS services would help? (Choose TWO)",
                "answers": [
                    "A. ELB.",
                    "B. Auto Scaling.",
                    "C. Amazon Athen.",
                    "D. ECR."
                ],
                "solution": "A, B"
            },
            {
                "question": "A company is planning to host an educational website on AWS. Their video courses will be streamed all around the world. Which of the following AWS services will help achieve high transfer speeds?",
                "answers": [
                    "A. Amazon SNS.",
                    "B. Amazon Kinesis Video Streams.",
                    "C. AWS CloudFormation.",
                    "D. Amazon CloudFront."
                ],
                "solution": "D"
            },
            {
                "question": "A developer is planning to build a two-tier web application that has a MySQL database layer. Which of the following AWS database services would provide automated backups for the application?",
                "answers": [
                    "A. A MySQL database installed on an EC2 instance.",
                    "B. Amazon Aurora.",
                    "C. Amazon DynamoDB.",
                    "D. Amazon Neptune."
                ],
                "solution": "B"
            },
            {
                "question": "What is the AWS service that enables AWS architects to manage infrastructure as code?",
                "answers": [
                    "A. AWS CloudFormation.",
                    "B. AWS Config.",
                    "C. Amazon SES.",
                    "D. Amazon EMR."
                ],
                "solution": "A"
            },
            {
                "question": "Under the shared responsibility model, which of the following is the responsibility of AWS?",
                "answers": [
                    "A. Client-side encryption.",
                    "B. Configuring infrastructure devices.",
                    "C. Server-side encryption.",
                    "D. Filtering traffic with Security Groups."
                ],
                "solution": "B"
            },
            {
                "question": "What does the AWS Health Dashboard provide? (Choose TWO)",
                "answers": [
                    "A. Detailed troubleshooting guidance to address AWS events impacting your resources.",
                    "B. Health checks for Auto Scaling instances.",
                    "C. Recommendations for Cost Optimization.",
                    "D. A dashboard detailing vulnerabilities in your applications.",
                    "E. Personalized view of AWS service health."
                ],
                "solution": "A, E"
            },
            {
                "question": "You have deployed your application on multiple Amazon EC2 instances. Your customers complain that sometimes they can't reach your application. Which AWS service allows you to monitor the performance of your EC2 instances to assist in troubleshooting these issues?",
                "answers": [
                    "A. AWS Lambda.",
                    "B. AWS Config.",
                    "C. Amazon CloudWatch.",
                    "D. AWS CloudTrail."
                ],
                "solution": "C"
            },
            {
                "question": "Your company is developing a critical web application in AWS, and the security of the application is a top priority. Which of the following AWS services will provide infrastructure security optimization recommendations?",
                "answers": [
                    "A. AWS Shield.",
                    "B. AWS Management Console.",
                    "C. AWS Secrets Manager.",
                    "D. AWS Trusted Advisor."
                ],
                "solution": "D"
            },
            {
                "question": "Which of the following is not a benefit of Amazon S3? (Choose TWO)",
                "answers": [
                    "A. Amazon S3 provides unlimited storage for any type of data.",
                    "B. Amazon S3 can run any type of application or backend system.",
                    "C. Amazon S3 stores any number of objects, but with object size limits.",
                    "D. Amazon S3 can be scaled manually to store and retrieve any amount of data from anywhere."
                ],
                "solution": "B, D"
            },
            {
                "question": "In the AWS Shared responsibility Model, which of the following are the responsibility of the customer? (Choose TWO)",
                "answers": [
                    "A. Disk disposal.",
                    "B. Controlling physical access to compute resources.",
                    "C. Patching the Network infrastructure.",
                    "D. Setting password complexity rules.",
                    "E. Configuring network access rules."
                ],
                "solution": "D, E"
            },
            {
                "question": "What does AWS provide to deploy popular technologies such as IBM MQ on AWS with the least amount of effort and time?",
                "answers": [
                    "A. Amazon Aurora.",
                    "B. Amazon CloudWatch.",
                    "C. AWS Quick Start reference deployments.",
                    "D. AWS OpsWorks."
                ],
                "solution": "C"
            },
            {
                "question": "An organization has decided to purchase an Amazon EC2 Reserved Instance (RI) for three years in order to reduce costs. It is possible that the application workloads could change during the reservation period. What is the EC2 Reserved Instance (RI) type that will allow the company to exchange the purchased reserved instance for another reserved instance with higher computing power if they need to?",
                "answers": [
                    "A. Elastic RI.",
                    "B. Premium RI.",
                    "C. Standard RI.",
                    "D. Convertible RI."
                ],
                "solution": "D"
            }
        ]
    },

    {
        "name": "Practice Exam 4",
        "questions": [
            {
                "question": "Where can you store files in AWS? (Choose TWO)",
                "answers": [
                    "A. Amazon EFS.",
                    "B. Amazon SNS.",
                    "C. Amazon EBS.",
                    "D. Amazon ECS."
                ],
                "solution": "A, C"
            },
            {
                "question": "Which AWS service can be used to store and reliably deliver messages across distributed systems?",
                "answers": [
                    "A. Amazon Simple Queue Service.",
                    "B. AWS Storage Gateway.",
                    "C. Amazon Simple Email Service.",
                    "D. Amazon Simple Storage Service."
                ],
                "solution": "A"
            },
            {
                "question": "Which of the following describes the payment model that AWS makes available for customers that can commit to using Amazon EC2 over a one or 3-year term to reduce their total computing costs?",
                "answers": [
                    "A. Pay less as AWS grows.",
                    "B. Pay as you go.",
                    "C. Pay less by using more.",
                    "D. Save when you reserve."
                ],
                "solution": "D"
            },
            {
                "question": "A company is migrating its on-premises database to Amazon RDS. What should the company do to ensure Amazon RDS costs are kept to a minimum?",
                "answers": [
                    "A. Right-size before and after migration.",
                    "B. Use a Multi-Region Active-Passive architecture.",
                    "C. Combine On-demand Capacity Reservations with Saving Plans.",
                    "D. Use a Multi-Region Active-Active architecture."
                ],
                "solution": "A"
            },
            {
                "question": "What is the primary storage service used by Amazon RDS database instances?",
                "answers": [
                    "A. Amazon Glacier.",
                    "B. Amazon EBS.",
                    "C. Amazon EFS.",
                    "D. Amazon S3."
                ],
                "solution": "B"
            },
            {
                "question": "A company is developing a new application using a microservices framework. The new application is having performance and latency issues. Which AWS Service should be used to troubleshoot these issues?",
                "answers": [
                    "A. AWS CodePipeline.",
                    "B. AWS X-Ray.",
                    "C. Amazon Inspector.",
                    "D. AWS CloudTrail."
                ],
                "solution": "B"
            },
            {
                "question": "Which of the following AWS services is designed with native Multi-AZ fault tolerance in mind? (Choose TWO)",
                "answers": [
                    "A. Amazon Redshift.",
                    "B. AWS Snowball.",
                    "C. Amazon Simple Storage Service.",
                    "D. Amazon EBS.",
                    "E. Amazon DynamoDB."
                ],
                "solution": "C, E"
            },
            {
                "question": "What are the Amazon RDS features that can be used to improve the availability of your database? (Choose TWO)",
                "answers": [
                    "A. AWS Regions.",
                    "B. Multi-AZ Deployment.",
                    "C. Automatic patching.",
                    "D. Read Replicas.",
                    "E. Amazon DynamoDB."
                ],
                "solution": "B, D"
            },
            {
                "question": "Sarah has deployed an application in the Northern California (us-west-1) region. After examining the application's traffic, she notices that about 30% of the traffic is coming from Asia. What can she do to reduce latency for the users in Asia?",
                "answers": [
                    "A. Replicate the current resources across multiple Availability Zones within the same region.",
                    "B. Migrate the application to a hosting provider in Asia.",
                    "C. Recreate the website content.",
                    "D. Create a CDN using CloudFront, so that content is cached at Edge Locations close to and in Asia."
                ],
                "solution": "D"
            },
            {
                "question": "An organization runs many systems and uses many AWS products. Which of the following services enables them to control how each developer interacts with these products?",
                "answers": [
                    "A. AWS Identity and Access Management.",
                    "B. Amazon RDS.",
                    "C. Network Access Control Lists.",
                    "D. Amazon EMR."
                ],
                "solution": "A"
            },
            {
                "question": "Using Amazon EC2 falls under which of the following cloud computing models?",
                "answers": [
                    "A. Iaas & SaaS.",
                    "B. IaaS.",
                    "C. SaaS.",
                    "D. PaaS."
                ],
                "solution": "B"
            },
            {
                "question": "Which of the below is a best-practice when building applications on AWS?",
                "answers": [
                    "A. Strengthen physical security by applying the principle of least privilege.",
                    "B. Ensure that the application runs on hardware from trusted vendors.",
                    "C. Use IAM policies to maintain performance.",
                    "D. Decouple the components of the application so that they run independently."
                ],
                "solution": "D"
            },
            {
                "question": "Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?",
                "answers": [
                    "A. Amazon EBS.",
                    "B. Amazon SQS.",
                    "C. Amazon Instance store.",
                    "D. Amazon S3."
                ],
                "solution": "D"
            },
            {
                "question": "Amazon Glacier is an Amazon S3 storage class that is suitable for storing [...] & [...]. (Choose TWO)",
                "answers": [
                    "A. Active archives.",
                    "B. Dynamic websites' assets.",
                    "C. Long-term analytic data.",
                    "D. Active databases."
                ],
                "solution": "A, C"
            },
            {
                "question": "What does Amazon Elastic Beanstalk provide?",
                "answers": [
                    "A. A PaaS solution to automate application deployment.",
                    "B. A compute engine for Amazon ECS.",
                    "C. A scalable file storage solution for use with AWS and on-premises servers.",
                    "D. A NoSQL database service."
                ],
                "solution": "A"
            },
            {
                "question": "What is the AWS service that performs automated network assessments of Amazon EC2 instances to check for vulnerabilities?",
                "answers": [
                    "A. Amazon Kinesis.",
                    "B. Security groups.",
                    "C. Amazon Inspector.",
                    "D. AWS Network Access Control Lists."
                ],
                "solution": "C"
            },
            {
                "question": "Under the Shared Responsibility Model, which of the following controls do customers fully inherit from AWS? (Choose TWO)",
                "answers": [
                    "A. Patch management controls.",
                    "B. Database controls.",
                    "C. Awareness & Training.",
                    "D. Environmental controls.",
                    "E. Physical controls."
                ],
                "solution": "D, E"
            },
            {
                "question": "A company needs to host a database in Amazon RDS for at least three years. Which of the following options would be the most cost-effective solution?",
                "answers": [
                    "A. Reserved instances     - No Upfront.",
                    "B. Reserved instances     - Partial Upfront.",
                    "C. On-Demand instances.",
                    "D. Spot Instances."
                ],
                "solution": "B"
            },
            {
                "question": "Your application has recently experienced significant global growth, and international users are complaining of high latency. What is the AWS characteristic that can help improve your international users' experience?",
                "answers": [
                    "A. Elasticity.",
                    "B. Global reach.",
                    "C. Data durability.",
                    "D. High availability."
                ],
                "solution": "B"
            },
            {
                "question": "Savings Plans are available for which of the following AWS compute services? (Choose TWO)",
                "answers": [
                    "A. AWS Batch.",
                    "B. AWS Outposts.",
                    "C. Amazon Lightsail.",
                    "D. Amazon EC2.",
                    "E. AWS Lambda."
                ],
                "solution": "D, E"
            },
            {
                "question": "A company has business critical workloads hosted on AWS and they are unwilling to accept any downtime. Which of the following is a recommended best practice to protect their workloads in the event of an unexpected natural disaster?",
                "answers": [
                    "A. Replicate data across multiple Edge Locations worldwide and use Amazon CloudFront to perform automatic failover in the event of an outage.",
                    "B. Deploy AWS resources across multiple Availability Zones within the same AWS Region.",
                    "C. Create point-in-time backups in another subnet and recover this data when a disaster occurs.",
                    "D. Deploy AWS resources to another AWS Region and implement an Active-Active disaster recovery strategy."
                ],
                "solution": "D"
            },
            {
                "question": "Which statement is correct with regards to AWS service limits? (Choose TWO)",
                "answers": [
                    "A. You can contact AWS support to increase the service limits.",
                    "B. Each IAM user has the same service limit.",
                    "C. There are no service limits on AWS.",
                    "D. You can use the AWS Trusted Advisor to monitor your service limits."
                ],
                "solution": "A, D"
            },
            {
                "question": "What is the AWS tool that enables you to use scripts to manage all AWS services and resources?",
                "answers": [
                    "A. AWS Console.",
                    "B. AWS Service Catalog.",
                    "C. AWS OpsWorks.",
                    "D. AWS CLI."
                ],
                "solution": "D"
            },
            {
                "question": "What are the connectivity options that can be used to build hybrid cloud architectures? (Choose TWO)",
                "answers": [
                    "A. AWS Artifact.",
                    "B. AWS Cloud9.",
                    "C. AWS Direct Connect.",
                    "D. AWS CloudTrail.",
                    "E. AWS VPN."
                ],
                "solution": "C, E"
            },
            {
                "question": "A company has deployed a new web application on multiple Amazon EC2 instances. Which of the following should they use to ensure that the incoming HTTP traffic is distributed evenly across the instances?",
                "answers": [
                    "A. AWS EC2 Auto Recovery.",
                    "B. AWS Auto Scaling.",
                    "C. AWS Network Load Balancer.",
                    "D. AWS Application Load Balancer."
                ],
                "solution": "D"
            },
            {
                "question": "Which of the following AWS offerings is a MySQL-compatible relational database service that can scale capacity automatically based on demand?",
                "answers": [
                    "A. Amazon Neptune.",
                    "B. Amazon Aurora.",
                    "C. Amazon RDS for SQL Server.",
                    "D. Amazon RDS for PostgreSQL."
                ],
                "solution": "B"
            },
            {
                "question": "Which of the following can help protect your EC2 instances from DDoS attacks? (Choose TWO)",
                "answers": [
                    "A. AWS CloudHSM.",
                    "B. Security Groups.",
                    "C. AWS Batch.",
                    "D. AWS IAM.",
                    "E. Network Access Control Lists (Network ACLs)."
                ],
                "solution": "B, E"
            },
            {
                "question": "What is the AWS data warehouse service that supports a high level of query performance on large amounts of datasets?",
                "answers": [
                    "A. Amazon Redshift.",
                    "B. Amazon Kinesis.",
                    "C. Amazon DynamoDB.",
                    "D.  Amazon RDS."
                ],
                "solution": "A"
            },
            {
                "question": "Which of the following should be considered when performing a TCO analysis to compare the costs of running an application on AWS instead of on-premises?",
                "answers": [
                    "A. Application development.",
                    "B. Market research.",
                    "C. Business analysis.",
                    "D. Physical hardware."
                ],
                "solution": "D"
            },
            {
                "question": "How are AWS customers billed for Linux-based Amazon EC2 usage?",
                "answers": [
                    "A. EC2 instances will be billed on one second increments, with a minimum of one minute.",
                    "B. EC2 instances will be billed on one hour increments, with a minimum of one day.",
                    "C. EC2 instances will be billed on one minute increments, with a minimum of one hour.",
                    "D. EC2 instances will be billed on one day increments, with a minimum of one month."
                ],
                "solution": "A"
            },
            {
                "question": "Which of the following will impact the price paid for an EC2 instance? (Choose TWO)",
                "answers": [
                    "A. Instance type.",
                    "B. The Availability Zone where the instance is provisioned.",
                    "C. Load balancing.",
                    "D. Number of buckets."
                ],
                "solution": "A, B"
            },
            {
                "question": "A customer spent a lot of time configuring a newly deployed Amazon EC2 instance. After the workload increases, the customer decides to provision another EC2 instance with an identical configuration. How can the customer achieve this?",
                "answers": [
                    "A. By creating an AWS Config template from the old instance and launching a new instance from it.",
                    "B. By creating an EBS Snapshot of the old instance.",
                    "C. By installing Aurora on EC2 and launching a new instance from it.",
                    "D. By creating an AMI from the old instance and launching a new instance from it."
                ],
                "solution": "D"
            },
            {
                "question": "A company uses AWS Organizations to manage all of its AWS accounts. Which of the following allows the company to restrict what services and actions are allowed in each individual account?",
                "answers": [
                    "A. IAM Principals.",
                    "B. AWS Service Control Policies (SCPs).",
                    "C. IAM policies.",
                    "D. AWS Fargate."
                ],
                "solution": "B"
            },
            {
                "question": "Which of the following statements describes the AWS Cloud's agility?",
                "answers": [
                    "A. AWS allows you to host your applications in multiple regions around the world.",
                    "B. AWS provides customizable hardware at the lowest possible cost.",
                    "C. AWS allows you to provision resources in minutes.",
                    "D. AWS allows you to pay upfront to reduce costs."
                ],
                "solution": "C"
            },
            {
                "question": "What are the benefits of using the Amazon Relational Database Service? (Choose TWO)",
                "answers": [
                    "A. Lower administrative burden.",
                    "B. Complete control over the underlying host.",
                    "C. Resizable compute capacity.",
                    "D. Scales automatically to larger or smaller instance types."
                ],
                "solution": "A, C"
            },
            {
                "question": "What is the connectivity option that uses Internet Protocol Security (IPSec) to establish encrypted connectivity between an on-premises network and the AWS Cloud?",
                "answers": [
                    "A. Internet Gateway.",
                    "B. AWS IQ.",
                    "C. AWS Direct Connect.",
                    "D. AWS Site-to-Site VPN."
                ],
                "solution": "D"
            },
            {
                "question": "What is the minimum level of AWS support that provides 24x7 access to technical support engineers via phone and chat?",
                "answers": [
                    "A. Enterprise Support.",
                    "B. Developer Support.",
                    "C. Basic Support.",
                    "D. Business Support."
                ],
                "solution": "D"
            },
            {
                "question": "Which of the following is used to control network traffic in AWS? (Choose TWO)",
                "answers": [
                    "A. Network Access Control Lists (NACLs).",
                    "B. Key Pairs.",
                    "C. Access Keys.",
                    "D. IAM Policies.",
                    "E. Security Groups."
                ],
                "solution": "A, E"
            },
            {
                "question": "A company has developed a media transcoding application in AWS. The application is designed to recover quickly from hardware failures. Which one of the following types of instance would be the most cost-effective choice to use?",
                "answers": [
                    "A. Reserved instances.",
                    "B. Spot Instances.",
                    "C. On-Demand instances.",
                    "D. Dedicated instances."
                ],
                "solution": "B"
            },
            {
                "question": "Which AWS Service provides the current status of all AWS Services in all AWS Regions?",
                "answers": [
                    "A. AWS Service Health Dashboard.",
                    "B. AWS Management Console.",
                    "C. Amazon CloudWatch.",
                    "D. AWS Personal Health Dashboard."
                ],
                "solution": "A"
            },
            {
                "question": "Which AWS service or feature can be used to call AWS Services from different programming languages?",
                "answers": [
                    "A. AWS Software Development Kit.",
                    "B. AWS Command Line Interface.",
                    "C. AWS CodeDeploy.",
                    "D. AWS Management Console."
                ],
                "solution": "A"
            },
            {
                "question": "Which AWS Service can be used to register a new domain name?",
                "answers": [
                    "A. Amazon Personalize.",
                    "B. Amazon Route 53.",
                    "C. AWS KMS.",
                    "D. AWS Config."
                ],
                "solution": "B"
            },
            {
                "question": "App development companies move their business to AWS to reduce time-to-market and improve customer satisfaction, what are the AWS automation tools that help them deploy their applications faster? (Choose TWO)",
                "answers": [
                    "A. AWS CloudFormation.",
                    "B. AWS Migration Hub.",
                    "C. AWS IAM.",
                    "D. AWS Elastic Beanstalk."
                ],
                "solution": "A, D"
            },
            {
                "question": "Which AWS service provides cost-optimization recommendations?",
                "answers": [
                    "A. AWS Trusted Advisor.",
                    "B. AWS Pricing Calculator.",
                    "C. Amazon QuickSight.",
                    "D. AWS X-Ray."
                ],
                "solution": "A"
            },
            {
                "question": "A company has hundreds of VPCs in multiple AWS Regions worldwide. What service does AWS offer to simplify the connection management among the VPCs?",
                "answers": [
                    "A. VPC Peering.",
                    "B. AWS Transit Gateway.",
                    "C. Amazon Connect.",
                    "D. Security Groups."
                ],
                "solution": "B"
            },
            {
                "question": "What is one benefit and one drawback of buying a reserved EC2 instance? (Select TWO)",
                "answers": [
                    "A. Instances can be shut down by AWS at any time with no notification.",
                    "B. Reserved instances require at least a one-year pricing commitment.",
                    "C. There is no additional charge for using dedicated instances.",
                    "D. Reserved instances provide a significant discount compared to on-demand instances."
                ],
                "solution": "B, D"
            },
            {
                "question": "Why does every AWS Region contain multiple Availability Zones?",
                "answers": [
                    "A. Multiple Availability Zones allows you to build resilient and highly available architectures.",
                    "B. Multiple Availability Zones results in lower total cost compared to deploying in a single Availability Zone.",
                    "C. Multiple Availability Zones allows for data replication and global reach.",
                    "D. Multiple Availability Zones within a region increases the storage capacity available in that region."
                ],
                "solution": "A"
            },
            {
                "question": "What is the most cost-effective purchasing option for running a set of EC2 instances that must always be available for a period of two months?",
                "answers": [
                    "A. On-Demand Instances.",
                    "B. Spot Instances.",
                    "C. Reserved Instances     - All Upfront.",
                    "D. Reserved Instances     - No Upfront."
                ],
                "solution": "A"
            },
            {
                "question": "Which of the following is a benefit of running an application in multiple Availability Zones?",
                "answers": [
                    "A. Allows you to exceed AWS service limits.",
                    "B. Reduces application response time between servers and global users.",
                    "C. Increases available compute capacity.",
                    "D. Increases the availability of your application."
                ],
                "solution": "D"
            },
            {
                "question": "Data security is one of the top priorities of AWS. How does AWS deal with old storage devices that have reached the end of their useful life?",
                "answers": [
                    "A. AWS sells the old devices to other hosting providers.",
                    "B. AWS destroys the old devices in accordance with industry-standard practices.",
                    "C. AWS sends the old devices for remanufacturing.",
                    "D. AWS stores the old devices in a secure place."
                ],
                "solution": "B"
            }
        ]
    },
    {
        "name": "Practice Exam 5",
        "questions": [
            {
                "question": "A developer needs to set up an SSL security certificate for a client's eCommerce website in order to use the HTTPS protocol. Which of the following AWS services can be used to deploy the required SSL server certificates? (Choose TWO)",
                "answers": [
                    "A. Amazon Route 53.",
                    "B. AWS ACM.",
                    "C. AWS Directory Service.",
                    "D. AWS Identity & Access Management."
                ],
                "solution": "A, B"
            },
            {
                "question": "Which of the following AWS services scale automatically without your intervention? (Choose TWO)",
                "answers": [
                    "A. Amazon EC2.",
                    "B. Amazon S3.",
                    "C. AWS Lambda.",
                    "D. Amazon EMR."
                ],
                "solution": "B, C"
            },
            {
                "question": "A company is planning to migrate an application from Amazon EC2 to AWS Lambda to use a serverless architecture. Which of the following will be the responsibility of AWS after migration? (Choose TWO)",
                "answers": [
                    "A. Application management.",
                    "B. Capacity management.",
                    "C. Access control.",
                    "D. Operating system maintenance."
                ],
                "solution": "B, D"
            },
            {
                "question": "How do ELBs improve the reliability of your application?",
                "answers": [
                    "A. By distributing traffic across multiple S3 buckets.",
                    "B. By replicating data to multiple availability zones.",
                    "C. By creating database Read Replicas.",
                    "D. By ensuring that only healthy targets receive traffic."
                ],
                "solution": "D"
            },
            {
                "question": "A company needs to migrate their website from on-premises to AWS. Security is a major concern for them, so they need to host their website on hardware that is NOT shared with other AWS customers. Which of the following EC2 instance options meets this requirement?",
                "answers": [
                    "A. On-demand instances.",
                    "B. Spot instances.",
                    "C. Dedicated instances.",
                    "D. Reserved instances."
                ],
                "solution": "C"
            },
            {
                "question": "A customer is planning to move billions of images and videos to be stored on Amazon S3. The customer has approximately 60 Petabytes of data to move. Which of the following AWS Services is the best choice to transfer the data to AWS?",
                "answers": [
                    "A. Snowball.",
                    "B. S3 Transfer Acceleration.",
                    "C. Snowmobile.",
                    "D. Amazon VPC."
                ],
                "solution": "C"
            },
            {
                "question": "A company plans to migrate a large amount of archived data to AWS. The archived data must be maintained for a period of 5 years and must be retrievable within 5 hours of a request. What is the most cost-effective AWS storage service to use?",
                "answers": [
                    "A. Amazon S3 Glacier.",
                    "B. Amazon EFS.",
                    "C. Amazon S3 Standard.",
                    "D. Amazon EBS."
                ],
                "solution": "A"
            },
            {
                "question": "Which AWS Service is used to manage user permissions?",
                "answers": [
                    "A. Security Groups.",
                    "B. Amazon ECS.",
                    "C. AWS IAM.",
                    "D. AWS Support."
                ],
                "solution": "C"
            },
            {
                "question": "Which support plan includes AWS Support Concierge Service?",
                "answers": [
                    "A. Premium Support.",
                    "B. Business Support.",
                    "C. Enterprise Support.",
                    "D. Standard Support."
                ],
                "solution": "C"
            },
            {
                "question": "A company needs to track resource changes using the API call history. Which AWS service can help the company achieve this goal?",
                "answers": [
                    "A. AWS Config.",
                    "B. Amazon CloudWatch.",
                    "C. AWS CloudTrail.",
                    "D. AWS CloudFormation."
                ],
                "solution": "C"
            },
            {
                "question": "What are the benefits of using an AWS-managed service? (Choose TWO)",
                "answers": [
                    "A. Provides complete control over the virtual infrastructure.",
                    "B. Allows customers to deliver new solutions faster.",
                    "C. Lowers operational complexity.",
                    "D. Eliminates the need to encrypt data."
                ],
                "solution": "B, C"
            },
            {
                "question": "Which of the following are use cases for Amazon S3? (Choose TWO)",
                "answers": [
                    "A. Hosting static websites.",
                    "B. Hosting websites that require sustained high CPU utilization.",
                    "C. Cost-effective database and log storage.",
                    "D. A media store for the CloudFront service."
                ],
                "solution": "A, D"
            },
            {
                "question": "What is the AWS' recommendation regarding access keys?",
                "answers": [
                    "A. Delete all access keys and use passwords instead.",
                    "B. Only share them with trusted people.",
                    "C. Rotate them regularly.",
                    "D. Save them within your application code."
                ],
                "solution": "C"
            },
            {
                "question": "What is the AWS IAM feature that provides an additional layer of security on top of user-name and password authentication?",
                "answers": [
                    "A. Key Pair.",
                    "B. Access Keys.",
                    "C. SDK.",
                    "D. MFA."
                ],
                "solution": "D"
            },
            {
                "question": "What is the benefit of using an API to access AWS Services?",
                "answers": [
                    "A. It improves the performance of AWS resources.",
                    "B. It reduces the time needed to provision AWS resources.",
                    "C. It reduces the number of developers necessary.",
                    "D. It allows for programmatic management of AWS resources."
                ],
                "solution": "D"
            },
            {
                "question": "A company is planning to migrate a database with high read/write activity to AWS. What is the best storage option to use?",
                "answers": [
                    "A. AWS Storage Gateway.",
                    "B. Amazon S3.",
                    "C. Amazon EBS.",
                    "D. Amazon Glacier."
                ],
                "solution": "C"
            },
            {
                "question": "How can AWS customers track and avoid over-spending on underutilized reserved instances?",
                "answers": [
                    "A. Customers can add all AWS accounts to an AWS Organization, enable Consolidated Billing, and turn off Reserved Instance sharing.",
                    "B. Customers can use Amazon Neptune to track and analyze their usage patterns, detect underutilized reserved instances, and then sell them on the Amazon EC2 Reserved Instance Marketplace.",
                    "C. Customers can use the AWS Budgets service to track the reserved instances usage and set up alert notifications when their utilization drops below the threshold that they define.",
                    "D. Customers can use Amazon CloudTrail to automatically check for unused reservations and get recommendations to reduce their bill."
                ],
                "solution": "C"
            },
            {
                "question": "What is the AWS service that provides five times the performance of a standard MySQL database?",
                "answers": [
                    "A. Amazon Aurora.",
                    "B. Amazon Redshift.",
                    "C. Amazon DynamoDB.",
                    "D. Amazon Neptune."
                ],
                "solution": "A"
            },
            {
                "question": "What does AWS Service Catalog provide?",
                "answers": [
                    "A. It enables customers to quickly find descriptions and use cases for AWS services.",
                    "B. It enables customers to explore the different catalogs of AWS services.",
                    "C. It simplifies organizing and governing commonly deployed IT services.",
                    "D. It allows developers to deploy infrastructure on AWS using familiar programming languages."
                ],
                "solution": "C"
            },
            {
                "question": "For managed services like Amazon DynamoDB, which of the below is AWS responsible for? (Choose TWO)",
                "answers": [
                    "A. Protecting credentials.",
                    "B. Logging access activity.",
                    "C. Patching the database software.",
                    "D. Operating system maintenance."
                ],
                "solution": "C, D"
            },
            {
                "question": "Which of the following AWS Services helps with planning application migration to the AWS Cloud?",
                "answers": [
                    "A. AWS Snowball Migration Service.",
                    "B. AWS Application Discovery Service.",
                    "C. AWS DMS.",
                    "D. AWS Migration Hub."
                ],
                "solution": "B"
            },
            {
                "question": "A company is trying to analyze the costs applied to their AWS account recently. Which of the following provides them the most granular data about their AWS costs and usage?",
                "answers": [
                    "A. Amazon Machine Image.",
                    "B. AWS Cost Explorer.",
                    "C. AWS Cost & Usage Report.",
                    "D. Amazon CloudWatch."
                ],
                "solution": "C"
            },
            {
                "question": "Which statement best describes the concept of an AWS region?",
                "answers": [
                    "A. An AWS Region is a geographical location with a collection of Edge locations.",
                    "B. An AWS Region is a virtual network dedicated only to a single AWS customer.",
                    "C. An AWS Region is a geographical location with a collection of Availability Zones.",
                    "D. An AWS Region represents the country where the AWS infrastructure exist."
                ],
                "solution": "C"
            },
            {
                "question": "A company has discovered that multiple S3 buckets were deleted, but it is unclear who deleted the buckets. Which of the following can the company use to determine the identity that deleted the buckets?",
                "answers": [
                    "A. SNS logs.",
                    "B. SQS logs.",
                    "C. CloudWatch Logs.",
                    "D. CloudTrail logs."
                ],
                "solution": "D"
            },
            {
                "question": "Which of the following are factors in determining the appropriate database technology to use for a specific workload? (Choose TWO)",
                "answers": [
                    "A. Availability Zones.",
                    "B. Data sovereignty.",
                    "C. The number of reads and writes per second.",
                    "D. The nature of the queries."
                ],
                "solution": "C, D"
            },
            {
                "question": "What are the benefits of implementing a tagging strategy for AWS resources? (Choose TWO)",
                "answers": [
                    "A. Quickly identify resources that belong to a specific project.",
                    "B. Quickly identify software solutions on AWS.",
                    "C. Track API calls in your AWS account.",
                    "D. Quickly identify deleted resources and their metadata.",
                    "E. Track AWS spending across multiple resources."
                ],
                "solution": "A, E"
            },
            {
                "question": "What are AWS shared controls?",
                "answers": [
                    "A. Controls that are solely the responsibility of the customer based on the application they are deploying within AWS services.",
                    "B. Controls that a customer inherits from AWS.",
                    "C. Controls that apply to both the infrastructure layer and customer layers.",
                    "D. Controls that the customer and AWS collaborate together upon to secure the infrastructure."
                ],
                "solution": "D"
            },
            {
                "question": "Which design principles relate to performance efficiency in AWS? (Choose TWO)",
                "answers": [
                    "A. Build multi-region architectures to better serve global customers.",
                    "B. Apply security at all layers.",
                    "C. Implement strong Identity and Access controls.",
                    "D. Use serverless architectures."
                ],
                "solution": "A, D"
            },
            {
                "question": "Which of the below are responsibilities of the customer when using Amazon EC2? (Choose TWO)",
                "answers": [
                    "A. Protecting sensitive data.",
                    "B. Patching of the underlying infrastructure.",
                    "C. Setup and operation of managed databases.",
                    "D. Maintaining consistent hardware components.",
                    "E. Installing and configuring third-party software."
                ],
                "solution": "A, E"
            },
            {
                "question": "Why would an organization decide to use AWS over an on-premises data center? (Choose TWO)",
                "answers": [
                    "A. Free commercial software licenses.",
                    "B. Free technical support.",
                    "C. Elastic resources.",
                    "D. On-site visits for auditing.",
                    "E. Cost Savings."
                ],
                "solution": "C, E"
            },
            {
                "question": "Which of the following AWS services can help you perform security analysis and regulatory compliance auditing? (Choose TWO)",
                "answers": [
                    "A. Amazon Inspector.",
                    "B. AWS Virtual Private Gateway.",
                    "C. AWS Batch.",
                    "D. Amazon ECS.",
                    "E. AWS Config."
                ],
                "solution": "A, E"
            },
            {
                "question": "Which of the following is NOT a characteristic of Amazon Elastic Compute Cloud (Amazon EC2)?",
                "answers": [
                    "A. Amazon EC2 is considered a Serverless Web Service.",
                    "B. Amazon EC2 eliminates the need to invest in hardware upfront.",
                    "C. Amazon EC2 can launch as many or as few virtual servers as needed.",
                    "D. Amazon EC2 offers scalable computing."
                ],
                "solution": "A"
            },
            {
                "question": "What is the AWS Compute service that executes code only when triggered by events?",
                "answers": [
                    "A. AWS Lambda.",
                    "B. Amazon CloudWatch.",
                    "C. AWS Transit Gateway.",
                    "D. Amazon EC2."
                ],
                "solution": "A"
            },
            {
                "question": "Both AWS and traditional IT distributors provide a wide range of virtual servers to meet their customers' requirements. What is the name of these virtual servers in AWS?",
                "answers": [
                    "A. Amazon EBS Snapshots.",
                    "B. Amazon VPC.",
                    "C. AWS Managed Servers.",
                    "D. Amazon EC2 Instances."
                ],
                "solution": "D"
            },
            {
                "question": "What is the framework created by AWS Professional Services that helps organizations design a road map to successful cloud adoption?",
                "answers": [
                    "A. AWS Secrets Manager.",
                    "B. AWS WAF.",
                    "C. AWS CAF.",
                    "D. Amazon EFS."
                ],
                "solution": "C"
            },
            {
                "question": "TYMO Cloud Corp is looking forward to migrating their entire on-premises data center to AWS. What tool can they use to perform a cost-benefit analysis of moving to the AWS Cloud?",
                "answers": [
                    "A. AWS Cost Explorer.",
                    "B. AWS TCO Calculator.",
                    "C. AWS Budgets.",
                    "D. AWS Pricing Calculator."
                ],
                "solution": "B"
            },
            {
                "question": "Which of the following activities supports the Operational Excellence pillar of the AWS Well-Architected Framework?",
                "answers": [
                    "A. Using AWS Trusted Advisor to find underutilized resources.",
                    "B. Using AWS CloudTrail to record user activities.",
                    "C. Using AWS CloudFormation to manage infrastructure as code.",
                    "D. Deploying an application in multiple Availability Zones."
                ],
                "solution": "C"
            },
            {
                "question": "Why do many startup companies prefer AWS over traditional on-premises solutions? (Choose TWO)",
                "answers": [
                    "A. AWS allows them to pay later when their business succeed.",
                    "B. AWS can build complete data centers faster than any other Cloud provider.",
                    "C. Using AWS, they can reduce time-to-market by focusing on business activities rather than on building and managing data centers.",
                    "D. AWS removes the need to invest in operational expenditure.",
                    "E. Using AWS allows companies to replace large capital expenditure with low variable costs."
                ],
                "solution": "C, E"
            },
            {
                "question": "What are the benefits of using DynamoDB? (Choose TWO)",
                "answers": [
                    "A. Automatically scales to meet required throughput capacity.",
                    "B. Provides resizable instances to match the current demand.",
                    "C. Supports both relational and non-relational data models.",
                    "D. Offers extremely low (single-digit millisecond) latency.",
                    "E. Supports the most popular NoSQL database engines such as CouchDB and MongoDB."
                ],
                "solution": "A, D"
            },
            {
                "question": "Which of the following can be used to protect data at rest on Amazon S3? (Choose TWO)",
                "answers": [
                    "A. Versioning.",
                    "B. Deduplication.",
                    "C. Permissions.",
                    "D. Decryption."
                ],
                "solution": "A, C"
            },
            {
                "question": "As part of the AWS Migration Acceleration Program (MAP), what does AWS provide to accelerate Enterprise adoption of AWS? (Choose TWO)",
                "answers": [
                    "A. AWS Partners.",
                    "B. AWS Artifact.",
                    "C. AWS Professional Services.",
                    "D. Amazon Athena."
                ],
                "solution": "A, C"
            },
            {
                "question": "AWS recommends some practices to help organizations avoid unexpected charges on their bill. Which of the following is NOT one of these practices?",
                "answers": [
                    "A. Deleting unused EBS volumes after terminating an EC2instance.",
                    "B. Deleting unused AutoScaling launch configuration.",
                    "C. Deleting unused Elastic Load Balancers.",
                    "D. Releasing unused Elastic IPs after terminating an EC2instance."
                ],
                "solution": "B"
            },
            {
                "question": "What is the AWS tool that can help a company visualize their AWS spending in the last few months?",
                "answers": [
                    "A. AWS Cost Explorer.",
                    "B. AWS Pricing Calculator.",
                    "C. AWS Budgets.",
                    "D. AWS Consolidated Billing."
                ],
                "solution": "A"
            },
            {
                "question": "When running a workload in AWS, the customer is NOT responsible for: (Select TWO)",
                "answers": [
                    "A. Running penetration tests.",
                    "B. Reserving capacity.",
                    "C. Data center operations.",
                    "D. Auditing and regulatory compliance.",
                    "E. Infrastructure security."
                ],
                "solution": "C, E"
            },
            {
                "question": "Which AWS service can be used to send promotional text messages (SMS) to more than 200 countries worldwide?",
                "answers": [
                    "A. Amazon Simple Email Service (Amazon SES).",
                    "B. Amazon Simple Storage Service (Amazon S3).",
                    "C. Amazon Simple Notification Service (Amazon SNS).",
                    "D. Amazon Simple Queue Service (Amazon SQS)."
                ],
                "solution": "C"
            },
            {
                "question": "Which of the following allows you to create new RDS instances? (Choose TWO)",
                "answers": [
                    "A. AWS CodeDeploy.",
                    "B. AWS Quick Starts.",
                    "C. AWS CloudFormation.",
                    "D. AWS DMS.",
                    "E. AWS Management Console."
                ],
                "solution": "C, E"
            },
            {
                "question": "One of the major advantages of using AWS is cost savings. What does AWS provide to reduce the cost of running Amazon EC2 instances?",
                "answers": [
                    "A. Low monthly instance maintenance costs.",
                    "B. Low-cost instance tagging.",
                    "C. Per-second instance billing.",
                    "D. Low instance start-up fees."
                ],
                "solution": "C"
            },
            {
                "question": "Which AWS Group assists customers in achieving their desired business outcomes?",
                "answers": [
                    "A. AWS Security Team.",
                    "B. AWS Professional Services.",
                    "C. AWS Trusted Advisor.",
                    "D. AWS Concierge Support Team."
                ],
                "solution": "B"
            },
            {
                "question": "Which AWS service or feature is used to manage the keys used to encrypt customer data?",
                "answers": [
                    "A. AWS KMS.",
                    "B. AWS Service Control Policies (SCPs).",
                    "C. Multi-Factor Authentication (MFA).",
                    "D. Amazon Macie."
                ],
                "solution": "A"
            },
            {
                "question": "Which AWS Service allows customers to download AWS SOC & PCI reports?",
                "answers": [
                    "A. AWS Well-Architected Tool.",
                    "B. AWS Artifact.",
                    "C. AWS Glue.",
                    "D. Amazon Chime."
                ],
                "solution": "B"
            }
        ]
    },
    {
        "name": "Practice Exam 6",
        "questions": [
            {
                "question": "A company is using EC2 Instances to run their e-commerce site on the AWS platform. If the site becomes unavailable, the company will lose a significant amount of money for each minute the site is unavailable. Which design principle should the company use to minimize the risk of an outage?",
                "answers": [
                    "A. Least Privilege.",
                    "B. Pilot Light.",
                    "C. Fault Tolerance.",
                    "D. Multi-threading."
                ],
                "solution": "C"
            },
            {
                "question": "You decide to buy a reserved instance for a term of one year. Which option provides the largest total discount?",
                "answers": [
                    "A. All up-front reservation.",
                    "B. All reserved instance payment options provide the same discount level.",
                    "C. Partial up-front reservation.",
                    "D. No up-front reservation."
                ],
                "solution": "A"
            },
            {
                "question": "What features does AWS offer to help protect your data in the Cloud? (Choose TWO)",
                "answers": [
                    "A. Access control.",
                    "B. Physical MFA devices.",
                    "C. Data encryption.",
                    "D. Unlimited storage."
                ],
                "solution": "A, C"
            },
            {
                "question": "An AWS customer has used one Amazon Linux instance for 2 hours, 5 minutes and 9 seconds, and one CentOS instance for 4 hours, 23 minutes and 7 seconds. How much time will the customer be billed for?",
                "answers": [
                    "A. 3 hours for the Linux instance and 5 hours for the CentOS instance.",
                    "B. 2 hours, 5 minutes and 9 seconds for the Linux instance and 4 hours, 23 minutes and 7 seconds for the CentOS instance.",
                    "C. 2 hours, 5 minutes and 9 seconds for the Linux instance and 5 hours for the CentOS instance.",
                    "D. 3 hours for the Linux instance and 4 hours, 23 minutes and 7 seconds for the CentOS instance."
                ],
                "solution": "C"
            },
            {
                "question": "What is the AWS Support feature that allows customers to manage support cases programmatically?",
                "answers": [
                    "A. AWS Trusted Advisor.",
                    "B. AWS Operations Support.",
                    "C. AWS Support API.",
                    "D. AWS Personal Health Dashboard."
                ],
                "solution": "C"
            },
            {
                "question": "Which methods can be used by customers to interact with AWS Identity and Access Management (IAM)? (Choose TWO)",
                "answers": [
                    "A. AWS CLI.",
                    "B. AWS Security Groups.",
                    "C. AWS SDKs.",
                    "D. AWS Network Access Control Lists."
                ],
                "solution": "A, C"
            },
            {
                "question": "Which of the following are types of AWS Identity and Access Management (IAM) identities? (Choose TWO)",
                "answers": [
                    "A. AWS Resource Groups.",
                    "B. IAM Policies.",
                    "C. IAM Roles.",
                    "D. IAM Users."
                ],
                "solution": "C, D"
            },
            {
                "question": "Which of the following Amazon RDS features facilitates offloading of database read activity?",
                "answers": [
                    "A. Database Snapshots.",
                    "B. Multi-AZ Deployments.",
                    "C. Automated Backups.",
                    "D. Read Replicas."
                ],
                "solution": "D"
            },
            {
                "question": "How does AWS notify customers about security and privacy events pertaining to AWS services?",
                "answers": [
                    "A. Using the AWS ACM service.",
                    "B. Using Security Bulletins.",
                    "C. Using the AWS Management Console.",
                    "D. Using Compliance Resources."
                ],
                "solution": "B"
            },
            {
                "question": "Which IAM entity can best be used to grant temporary access to your AWS resources?",
                "answers": [
                    "A. IAM Users.",
                    "B. Key Pair.",
                    "C. IAM Roles.",
                    "D. IAM Groups."
                ],
                "solution": "C"
            },
            {
                "question": "A company has a web application that is hosted on a single EC2 instance and is approaching 100 percent CPU Utilization during peak loads. Rather than scaling the server vertically, the company has decided to deploy three Amazon EC2 instances in parallel and to distribute traffic across the three servers. What AWS Service should the company use to distribute the traffic evenly?",
                "answers": [
                    "A. AWS Global Accelerator.",
                    "B. AWS Application Load Balancer (ALB).",
                    "C. Amazon CloudFront.",
                    "D. Transit VPC."
                ],
                "solution": "B"
            },
            {
                "question": "Which of the following approaches will help you eliminate human error and automate the process of creating and updating your AWS environment?",
                "answers": [
                    "A. Use Software test automation tools.",
                    "B. Use AWS CodeDeploy to build and automate your AWS environment.",
                    "C. Use code to provision and operate your AWS infrastructure.",
                    "D. Migrate all of your applications to a dedicated host."
                ],
                "solution": "C"
            },
            {
                "question": "A company is seeking to better secure its AWS account from unauthorized access. Which of the below options can the customer use to achieve this goal?",
                "answers": [
                    "A. Restrict any API call made through SDKs or CLI.",
                    "B. Create one IAM account for each department in the company (Development, QA, Production), and share it across all staff in that department.",
                    "C. Require Multi-Factor Authentication (MFA) for all IAM User access.",
                    "D. Set up two login passwords."
                ],
                "solution": "C"
            },
            {
                "question": "Which AWS Service offers volume discounts based on usage?",
                "answers": [
                    "A. Amazon VPC.",
                    "B. Amazon S3.",
                    "C. Amazon Lightsail.",
                    "D. AWS Cost Explorer."
                ],
                "solution": "B"
            },
            {
                "question": "Which of the following factors should be considered when determining the region in which AWS Resources will be deployed? (Choose TWO)",
                "answers": [
                    "A. The AWS Region's security level.",
                    "B. Data sovereignty.",
                    "C. Cost.",
                    "D. The planned number of VPCs."
                ],
                "solution": "B, C"
            },
            {
                "question": "You are running a financial services web application on AWS. The application uses a MySQL database to store the data. Which of the following AWS services would improve the performance of your application by allowing you to retrieve information from fast in-memory caches?",
                "answers": [
                    "A. Amazon EFS.",
                    "B. Amazon Neptune.",
                    "C. Amazon ElastiCache.",
                    "D. DAX."
                ],
                "solution": "C"
            },
            {
                "question": "What are the advantages of using Auto Scaling Groups for EC2 instances?",
                "answers": [
                    "A. Auto Scaling Groups caches the most recent responses at global edge locations to reduce latency and improve performance.",
                    "B. Auto Scaling Groups scales EC2 instances in multiple Availability Zones to increase application availability and fault tolerance.",
                    "C. Auto Scaling Groups scales EC2 instances across multiple regions to reduce latency for global users.",
                    "D. Auto Scaling Groups distributes application traffic across multiple Availability Zones to enhance performance."
                ],
                "solution": "B"
            },
            {
                "question": "The TCO gap between AWS infrastructure and traditional infrastructure has widened over the recent years. Which of the following could be the reason for that?",
                "answers": [
                    "A. AWS helps customers invest more in capital expenditures.",
                    "B. AWS automates all infrastructure operations, so customers save more on human resources costs.",
                    "C. AWS continues to lower the cost of cloud computing for its customers.",
                    "D. AWS secures AWS resources at no additional charge."
                ],
                "solution": "C"
            },
            {
                "question": "Which of the following are examples of the customer's responsibility to implement security IN the cloud? (Choose TWO)",
                "answers": [
                    "A. Building a schema for an application.",
                    "B. Replacing physical hardware.",
                    "C. Creating a new hypervisor.",
                    "D. Patch management of the underlying infrastructure.",
                    "E. File system encryption."
                ],
                "solution": "A, E"
            },
            {
                "question": "Which of the following is a type of MFA device that customers can use to protect their AWS resources?",
                "answers": [
                    "A. AWS CloudHSM.",
                    "B. U2F Security Key.",
                    "C. AWS Access Keys.",
                    "D. AWS Key Pair."
                ],
                "solution": "B"
            },
            {
                "question": "A company is seeking to deploy an existing .NET application onto AWS as quickly as possible. Which AWS Service should the customer use to achieve this goal?",
                "answers": [
                    "A. Amazon SNS.",
                    "B. AWS Elastic Beanstalk.",
                    "C. AWS Systems Manager.",
                    "D. AWS Trusted Advisor."
                ],
                "solution": "B"
            },
            {
                "question": "Which of the following is NOT a factor when estimating the costs of Amazon EC2? (Choose TWO)",
                "answers": [
                    "A. The amount of time the instances will be running.",
                    "B. Number of security groups.",
                    "C. Allocated Elastic IP Addresses.",
                    "D. Number of Hosted Zones."
                ],
                "solution": "B, D"
            },
            {
                "question": "Which AWS Service helps enterprises extend their on-premises storage to AWS in a cost-effective manner?",
                "answers": [
                    "A. AWS Data Pipeline.",
                    "B. AWS Storage Gateway.",
                    "C. Amazon Aurora.",
                    "D. Amazon EFS."
                ],
                "solution": "B"
            },
            {
                "question": "A company is building an online cloud storage platform. They need a storage service that can scale capacity automatically, while minimizing cost. Which AWS storage service should the company use to meet these requirements?",
                "answers": [
                    "A. Amazon Simple Storage Service.",
                    "B. Amazon Elastic Block Store.",
                    "C. Amazon Elastic Container Service.",
                    "D. AWS Storage Gateway."
                ],
                "solution": "A"
            },
            {
                "question": "You have just hired a skilled sys-admin to join your team. As usual, you have created a new IAM user for him to interact with AWS services. On his first day, you ask him to create snapshots of all existing Amazon EBS volumes and save them in a new Amazon S3 bucket. However, the new member reports back that he is unable to create neither EBS snapshots nor S3 buckets. What might prevent him from doing this simple task?",
                "answers": [
                    "A. EBS and S3 are accessible only to the root account owner.",
                    "B. The systems administrator must contact AWS Support first to activate his new IAM account.",
                    "C. There is not enough space in S3 to store the snapshots.",
                    "D. There is a non-explicit deny to all new users."
                ],
                "solution": "D"
            },
            {
                "question": "An external auditor is requesting a log of all accesses to the AWS resources in the company's account. Which of the following services will provide the auditor with the requested information?",
                "answers": [
                    "A. AWS CloudTrail.",
                    "B. Amazon CloudFront.",
                    "C. AWS CloudFormation.",
                    "D. Amazon CloudWatch."
                ],
                "solution": "A"
            },
            {
                "question": "Which of the below options is true of Amazon Cloud Directory?",
                "answers": [
                    "A. Amazon Cloud Directory allows the organization of hierarchies of data across multiple dimensions.",
                    "B. Amazon Cloud Directory enables the analysis of video and data streams in real time.",
                    "C. Amazon Cloud Directory allows users to access AWS with their existing Active Directory credentials.",
                    "D. Amazon Cloud Directory allows for registration and management of domain names."
                ],
                "solution": "A"
            },
            {
                "question": "A user has opened a \"Production System Down\" support case to get help from AWS Support after a production system disruption. What is the expected response time for this type of support case?",
                "answers": [
                    "A. 12 hours.",
                    "B. 15 minutes.",
                    "C. 24 hours.",
                    "D. One hour."
                ],
                "solution": "D"
            },
            {
                "question": "Which of the below options is a best practice for making your application on AWS highly available?",
                "answers": [
                    "A. Deploy the application to at least two Availability Zones.",
                    "B. Use Elastic Load Balancing (ELB) across multiple AWS Regions.",
                    "C. Deploy the application code on at least two servers in the same Availability Zone.",
                    "D. Rewrite the application code to handle all incoming requests."
                ],
                "solution": "A"
            },
            {
                "question": "Which of the following should be taken into account when performing a TCO analysis regarding the costs of running an application on AWS VS on-premises? (Choose TWO)",
                "answers": [
                    "A. Labor and IT costs.",
                    "B. Cooling and power consumption.",
                    "C. Amazon EBS computing power.",
                    "D. Software architecture."
                ],
                "solution": "A, B"
            },
            {
                "question": "Your company requires a response time of less than 15 minutes from support interactions about their business-critical systems that are hosted on AWS if those systems go down. Which AWS Support Plan should this company use?",
                "answers": [
                    "A. AWS Basic Support.",
                    "B. AWS Developer Support.",
                    "C. AWS Business Support.",
                    "D. AWS Enterprise Support."
                ],
                "solution": "D"
            },
            {
                "question": "Which of the following AWS offerings are serverless services? (Choose TWO)",
                "answers": [
                    "A. Amazon EC2.",
                    "B. AWS Lambda.",
                    "C. Amazon DynamoDB.",
                    "D. Amazon EMR."
                ],
                "solution": "B, C"
            },
            {
                "question": "Which AWS service enables you to quickly purchase and deploy SSL/TLS certificates?",
                "answers": [
                    "A. Amazon GuardDuty.",
                    "B. AWS ACM.",
                    "C. Amazon Detective.",
                    "D. AWS WAF."
                ],
                "solution": "B"
            },
            {
                "question": "Which AWS Service provides integration with Chef to automate the configuration of EC2 instances?",
                "answers": [
                    "A. AWS Config.",
                    "B. AWS OpsWorks.",
                    "C. AutoScaling.",
                    "D. AWS CloudFormation."
                ],
                "solution": "B"
            },
            {
                "question": "A customer is seeking to store objects in their AWS environment and to make those objects downloadable over the internet. Which AWS Service can be used to accomplish this?",
                "answers": [
                    "A. Amazon EBS.",
                    "B. Amazon EFS.",
                    "C. Amazon S3.",
                    "D. Amazon Instance Store."
                ],
                "solution": "C"
            },
            {
                "question": "Which of the following services can be used to monitor the HTTP and HTTPS requests that are forwarded to Amazon CloudFront?",
                "answers": [
                    "A. AWS WAF.",
                    "B. Amazon CloudWatch.",
                    "C. AWS Cloud9.",
                    "D. AWS CloudTrail."
                ],
                "solution": "B"
            },
            {
                "question": "A company is migrating a web application to AWS. The application's compute capacity is continually utilized throughout the year. Which of the below options offers the company the most cost-effective solution?",
                "answers": [
                    "A. On-demand Instances.",
                    "B. Dedicated Hosts.",
                    "C. Spot Instances.",
                    "D. Reserved Instances."
                ],
                "solution": "D"
            },
            {
                "question": "A company wants to grant a new employee long-term access to manage Amazon DynamoDB databases. Which of the following is a recommended best-practice when granting these permissions?",
                "answers": [
                    "A. Create an IAM role and attach a policy with Amazon DynamoDB access permissions.",
                    "B. Create an IAM role and attach a policy with Administrator access permissions.",
                    "C. Create an IAM user and attach a policy with Amazon DynamoDB access permissions.",
                    "D. Create an IAM user and attach a policy with Administrator access permissions."
                ],
                "solution": "C"
            },
            {
                "question": "When granting permissions to applications running on Amazon EC2 instances, which of the following is considered best practice?",
                "answers": [
                    "A. Generate new IAM access keys every time you delegate permissions.",
                    "B. Store the required AWS credentials directly within the application code.",
                    "C. Use temporary security credentials (IAM roles) instead of long-term access keys.",
                    "D. Do nothing; Applications that run on Amazon EC2 instances do not need permission to interact with other AWS services or resources."
                ],
                "solution": "C"
            },
            {
                "question": "Which of the following will help AWS customers save on costs when migrating their workloads to AWS?",
                "answers": [
                    "A. Use servers instead of managed services.",
                    "B. Use existing third-party software licenses on AWS.",
                    "C. Migrate production workloads to AWS edge locations instead of AWS Regions.",
                    "D. Use AWS Outposts to run all workloads in a cost-optimized environment."
                ],
                "solution": "B"
            },
            {
                "question": "An organization has a legacy application designed using monolithic-based architecture. Which AWS Service can be used to decouple the components of the application?",
                "answers": [
                    "A. Amazon SQS.",
                    "B. Virtual Private Gateway.",
                    "C. AWS Artifact.",
                    "D. Amazon CloudFront."
                ],
                "solution": "A"
            },
            {
                "question": "Which of the following can be used to enable the Virtual Multi-Factor Authentication? (Choose TWO)",
                "answers": [
                    "A. Amazon Connect.",
                    "B. AWS CLI.",
                    "C. AWS Identity and Access Management (IAM).",
                    "D. Amazon SNS."
                ],
                "solution": "B, C"
            },
            {
                "question": "According to best practices, which of the below options is best suited for processing a large number of binary files?",
                "answers": [
                    "A. Vertically scaling EC2 instances.",
                    "B. Running RDS instances in parallel.",
                    "C. Vertically scaling RDS instances.",
                    "D. Running EC2 instances in parallel."
                ],
                "solution": "D"
            },
            {
                "question": "A company is planning to use Amazon S3 and Amazon CloudFront to distribute its video courses globally. What tool can the company use to estimate the costs of these services?",
                "answers": [
                    "A. AWS Cost Explorer.",
                    "B. AWS Pricing Calculator.",
                    "C. AWS Budgets.",
                    "D. AWS Cost & Usage Report."
                ],
                "solution": "B"
            },
            {
                "question": "What should you do if you see resources, which you don't remember creating, in the AWS Management Console? (Choose TWO)",
                "answers": [
                    "A. Stop all running services and open an investigation.",
                    "B. Give your root account password to AWS Support so that they can assist in troubleshooting and securing the account.",
                    "C. Check the AWS CloudTrail logs and delete all IAM users that have access to your resources.",
                    "D. Open an investigation and delete any potentially compromised IAM users.",
                    "E. Change your AWS root account password and the passwords of any IAM users."
                ],
                "solution": "D, E"
            },
            {
                "question": "A key practice when designing solutions on AWS is to minimize dependencies between components so that the failure of a single component does not impact other components. What is this practice called?",
                "answers": [
                    "A. Elastic coupling.",
                    "B. Loosely coupling.",
                    "C. Scalable coupling.",
                    "D. Tightly coupling."
                ],
                "solution": "B"
            },
            {
                "question": "Which AWS Service offers an NFS file system that can be mounted concurrently from multiple EC2 instances?",
                "answers": [
                    "A. Amazon Elastic File System.",
                    "B. Amazon Simple Storage Service.",
                    "C. Amazon Elastic Block Store.",
                    "D. AWS Storage Gateway."
                ],
                "solution": "A"
            },
            {
                "question": "Availability Zones within a Region are connected over low-latency links. Which of the following is a benefit of these links?",
                "answers": [
                    "A. Create private connection to your data center.",
                    "B. Achieve global high availability.",
                    "C. Automate the process of provisioning new compute resources.",
                    "D. Make synchronous replication of your data possible."
                ],
                "solution": "D"
            },
            {
                "question": "Which of the following are true regarding the languages that are supported on AWS Lambda? (Choose TWO)",
                "answers": [
                    "A. Lambda only supports Python and Node.js, but third party plugins are available to convert code in other languages to these formats.",
                    "B. Lambda natively supports a number of programming languages such as Node.js, Python, and Java.",
                    "C. Lambda is AWS' proprietary programming language for microservices.",
                    "D. Lambda doesn't support programming languages; it is a serverless compute service.",
                    "E. Lambda can support any programming language using an API."
                ],
                "solution": "B, E"
            },
            {
                "question": "What are the capabilities of AWS X-Ray? (Choose TWO)",
                "answers": [
                    "A. Automatically decouples application components.",
                    "B. Facilitates tracking of user requests to identify application issues.",
                    "C. Helps improve application performance.",
                    "D. Deploys applications to Amazon EC2 instances."
                ],
                "solution": "B, C"
            }
        ]
    },
    {
        "name": "Practice Exam 7",
        "questions": [
            {
                "question": "Which of the following is true regarding the AWS availability zones and edge locations?",
                "answers": [
                    "A. Edge locations are located in separate Availability Zones worldwide to serve global customers.",
                    "B. An availability zone exists within an edge location to distribute content globally with low latency.",
                    "C. An Availability Zone is a geographic location where AWS provides multiple, physically separated and isolated edge locations.",
                    "D. An AWS Availability Zone is an isolated location within an AWS Region, however edge locations are located in multiple cities worldwide."
                ],
                "solution": "D"
            },
            {
                "question": "Which features are included in the AWS Business Support Plan? (Choose TWO)",
                "answers": [
                    "A. 24x7 access to customer service.",
                    "B. Access to Cloud Support Engineers via email only during business hours.",
                    "C. Access to the Infrastructure Event Management (IEM) feature for additional fee.",
                    "D. 24x7 access to the TAM feature."
                ],
                "solution": "A, C"
            },
            {
                "question": "A company is developing a mobile application and wants to allow users to use their Amazon, Apple, Facebook, or Google identities to authenticate to the application. Which AWS Service should the company use for this purpose?",
                "answers": [
                    "A. Amazon GuardDuty.",
                    "B. Amazon Personalize.",
                    "C. Amazon Cognito.",
                    "D. AWS IAM."
                ],
                "solution": "C"
            },
            {
                "question": "Which AWS Service allows customers to create a template that programmatically defines policies and configurations of all AWS resources as code and so that the same template can be reused among multiple projects?",
                "answers": [
                    "A. AWS CloudFormation.",
                    "B. AWS Config.",
                    "C. AWS CloudTrail.",
                    "D. AWS Auto Scaling."
                ],
                "solution": "A"
            },
            {
                "question": "Which of the following are advantages of using AWS as a cloud computing provider? (Choose TWO)",
                "answers": [
                    "A. Eliminates the need to monitor servers and applications.",
                    "B. Manages all the compliance and auditing tasks.",
                    "C. Provides custom hardware to meet any specification.",
                    "D. Eliminates the need to guess on infrastructure capacity needs.",
                    "E. Enables customers to trade their capital expenses for operational expenses."
                ],
                "solution": "D, E"
            },
            {
                "question": "A customer is planning to migrate their Microsoft SQL Server databases to AWS. Which AWS Services can the customer use to run their Microsoft SQL Server database on AWS? (Choose TWO)",
                "answers": [
                    "A. AWS Fargate.",
                    "B. Amazon Elastic Compute Cloud.",
                    "C. Amazon RDS.",
                    "D. AWS Database Migration service (DMS)."
                ],
                "solution": "B, C"
            },
            {
                "question": "Which AWS Service can perform health checks on Amazon EC2 instances?",
                "answers": [
                    "A. AWS CloudFormation.",
                    "B. Amazon Route 53.",
                    "C. Amazon Chime.",
                    "D. Amazon Aurora."
                ],
                "solution": "B"
            },
            {
                "question": "A company is developing an application that will leverage facial recognition to automate photo tagging. Which AWS Service should the company use for facial recognition?",
                "answers": [
                    "A. Amazon Comprehend.",
                    "B. AWS IAM.",
                    "C. Amazon Polly.",
                    "D. Amazon Rekognition."
                ],
                "solution": "D"
            },
            {
                "question": "Which of the following are examples of AWS-managed databases? (Choose TWO)",
                "answers": [
                    "A. Amazon Neptune.",
                    "B. Amazon CloudSearch.",
                    "C. Microsoft SQL Server on Amazon EC2.",
                    "D. MySQL on Amazon EC2.",
                    "E. Amazon RDS for MySQL."
                ],
                "solution": "A, E"
            },
            {
                "question": "A company's AWS workflow requires that it periodically perform large-scale image and video processing jobs. The customer is seeking to minimize cost and has stated that the amount of time it takes to process these jobs is not critical, but that cost minimization is the most important factor in designing the solution. Which EC2 instance class is best suited for this processing?",
                "answers": [
                    "A. EC2 On-Demand Instances.",
                    "B. EC2 Reserved Instances     - No Upfront.",
                    "C. EC2 Spot Instances.",
                    "D. EC2 Reserved Instances     - All Upfront."
                ],
                "solution": "C"
            },
            {
                "question": "There is a requirement to grant a DevOps team full administrative access to all resources in an AWS account. Who can grant them these permissions?",
                "answers": [
                    "A. AWS account owner.",
                    "B. AWS technical account manager.",
                    "C. AWS security team.",
                    "D. AWS cloud support engineers."
                ],
                "solution": "A"
            },
            {
                "question": "You need to migrate a large number of on-premises workloads to AWS. Which AWS service is the most appropriate?",
                "answers": [
                    "A. AWS File Transfer Acceleration.",
                    "B. AWS Server Migration Service.",
                    "C. AWS Database Migration Service.",
                    "D. AWS Application Discovery Service."
                ],
                "solution": "B"
            },
            {
                "question": "What are some key benefits of using AWS CloudFormation? (Choose TWO)",
                "answers": [
                    "A. It helps AWS customers deploy their applications without worrying about the underlying infrastructure.",
                    "B. It applies advanced IAM security features automatically.",
                    "C. It automates the provisioning and updating of your infrastructure in a safe and controlled manner.",
                    "D. It allows you to model your entire infrastructure in just a text file."
                ],
                "solution": "C, D"
            },
            {
                "question": "Which of the following is a cloud computing deployment model that connects infrastructure and applications between cloud-based resources and existing resources not located in the cloud?",
                "answers": [
                    "A. On-premises.",
                    "B. Mixed.",
                    "C. Hybrid.",
                    "D. Cloud."
                ],
                "solution": "C"
            },
            {
                "question": "A company is hosting business critical workloads in an AWS Region. To protect against data loss and ensure business continuity, a mirror image of the current AWS environment should be created in another AWS Region. Company policy requires that the standby environment must be available in minutes in case of an outage in the primary AWS Region. Which AWS service can be used to meet these requirements?",
                "answers": [
                    "A. CloudEndure Disaster Recovery.",
                    "B. CloudEndure Migration.",
                    "C. AWS Backup.",
                    "D. AWS Glue."
                ],
                "solution": "A"
            },
            {
                "question": "Which of the following S3 storage classes is most appropriate to host static assets for a popular e-commerce website with stable access patterns?",
                "answers": [
                    "A. S3 Standard-IA.",
                    "B. S3 Intelligent-Tiering.",
                    "C. S3 Glacier Deep Archive.",
                    "D. S3 Standard."
                ],
                "solution": "D"
            },
            {
                "question": "You want to create a backup of your data in another geographical location. Where should you create this backup?",
                "answers": [
                    "A. In another Edge location.",
                    "B. In another Region.",
                    "C. In another VPC.",
                    "D. In another Availability Zone."
                ],
                "solution": "B"
            },
            {
                "question": "Which statement is true in relation to the security of Amazon EC2?",
                "answers": [
                    "A. You should use instance store volumes to store login data.",
                    "B. You should regularly patch the operating system and applications on your EC2 instances.",
                    "C. You should deploy critical components of your application in the Availability Zone that you trust.",
                    "D. You can track all API calls using Amazon Athena."
                ],
                "solution": "B"
            },
            {
                "question": "What does AWS Cost Explorer provide to help manage your AWS spend?",
                "answers": [
                    "A. Cost comparisons between AWS Cloud environments and on-premises environments.",
                    "B. Accurate estimates of AWS service costs based on your expected usage.",
                    "C. Consolidated billing.",
                    "D. Highly accurate cost forecasts for up to 12 months ahead."
                ],
                "solution": "D"
            },
            {
                "question": "Which of the following is a feature of Amazon RDS that performs automatic failover when the primary database fails to respond?",
                "answers": [
                    "A. RDS Single-AZ.",
                    "B. RDS Write Replica.",
                    "C. RDS Snapshots.",
                    "D. RDS Multi-AZ."
                ],
                "solution": "D"
            },
            {
                "question": "You are using several on-demand EC2 Instances to run your development environment. What is the best way to reduce your charges when these instances are not in use?",
                "answers": [
                    "A. Deleting all EBS volumes attached to the instances.",
                    "B. You cannot minimize charges for on-demand instances.",
                    "C. Terminating the instances.",
                    "D. Stopping the instances."
                ],
                "solution": "D"
            },
            {
                "question": "Which of the following strategies helps protect your AWS root account?",
                "answers": [
                    "A. Delete root user access keys if you do not need them.",
                    "B. Apply MFA for the root account and use it for all of your work.",
                    "C. Access the root account only from your personal Mobile Phone.",
                    "D. Only share your AWS account password or access keys with trusted persons."
                ],
                "solution": "A"
            },
            {
                "question": "Which of the following are factors should be considered for Amazon EBS pricing? (Choose TWO)",
                "answers": [
                    "A. The size of volumes provisioned per month.",
                    "B. The compute capacity you consume.",
                    "C. The amount of data you have stored in snapshots.",
                    "D. The compute time you consume."
                ],
                "solution": "A, C"
            },
            {
                "question": "You have just set up your AWS environment and have created six IAM user accounts for the DevOps team. What is the AWS recommendation when granting permissions to these IAM accounts?",
                "answers": [
                    "A. Attach a separate IAM policy for each individual account.",
                    "B. Apply the Principle of Least Privilege.",
                    "C. For security purposes, you should not grant any permission to the DevOps team.",
                    "D. Create six different IAM passwords."
                ],
                "solution": "B"
            },
            {
                "question": "Which of the following has the greatest impact on cost? (Choose TWO)",
                "answers": [
                    "A. Compute charges.",
                    "B. The number of services used.",
                    "C. Data Transfer In charges.",
                    "D. Data Transfer Out charges."
                ],
                "solution": "A, D"
            },
            {
                "question": "Who from the following will get the largest discount?",
                "answers": [
                    "A. A user who chooses to buy On-demand, Convertible, Partial upfront instances.",
                    "B. A user who chooses to buy Reserved, Convertible, All upfront instances.",
                    "C. A user who chooses to buy Reserved, Standard, No upfront instances.",
                    "D. A user who chooses to buy Reserved, Standard, All upfront instances."
                ],
                "solution": "D"
            },
            {
                "question": "Which of the following is an available option when purchasing Amazon EC2 instances?",
                "answers": [
                    "A. The ability to bid to get the lowest possible prices.",
                    "B. The ability to register EC2 instances to get volume discounts on every hour the instances are running.",
                    "C. The ability to buy Dedicated Instances for up to 90% discount.",
                    "D. The ability to pay upfront to get lower hourly costs."
                ],
                "solution": "D"
            },
            {
                "question": "What does the term Economies of scale mean?",
                "answers": [
                    "A. It means that you save more when you consume more.",
                    "B. It means as more time passes using AWS, you pay more for its services.",
                    "C. It means that AWS will continuously lower costs as it grows.",
                    "D. It means that you have the ability to pay as you go."
                ],
                "solution": "C"
            },
            {
                "question": "A company experiences fluctuations in traffic patterns to their e-commerce website when running flash sales. What service can help the company dynamically match the required compute capacity to handle spikes in traffic during flash sales?",
                "answers": [
                    "A. AWS Auto Scaling.",
                    "B. Amazon Elastic Compute Cloud.",
                    "C. Amazon Elastic File System.",
                    "D. Amazon ElastiCache."
                ],
                "solution": "A"
            },
            {
                "question": "Which of the below options is true of Amazon VPC?",
                "answers": [
                    "A. Amazon VPC allows customers to control user interactions with all other AWS resources.",
                    "B. AWS Customers have complete control over their Amazon VPC virtual networking environment.",
                    "C. AWS is responsible for all the management and configuration details of Amazon VPC.",
                    "D. Amazon VPC helps customers to review their AWS architecture and adopt best practices."
                ],
                "solution": "B"
            },
            {
                "question": "Which tool can a non-AWS customer use to compare the cost of on-premises environment resources to AWS?",
                "answers": [
                    "A. AWS Cost Explorer.",
                    "B. AWS Pricing Calculator.",
                    "C. AWS Budgets.",
                    "D. AWS TCO Calculator."
                ],
                "solution": "D"
            },
            {
                "question": "Which of the following services provide real-time auditing for compliance and vulnerabilities? (Choose TWO)",
                "answers": [
                    "A. AWS Config.",
                    "B. Amazon Redshift.",
                    "C. Amazon MQ.",
                    "D. AWS Trusted Advisor."
                ],
                "solution": "A, D"
            },
            {
                "question": "Which of the following AWS services uses Puppet to automate how EC2 instances are configured?",
                "answers": [
                    "A. AWS OpsWorks.",
                    "B. AWS CloudFormation.",
                    "C. AWS Quick Starts.",
                    "D. AWS CloudTrail."
                ],
                "solution": "A"
            },
            {
                "question": "An organization uses a hybrid cloud architecture to run their business. Which AWS service enables them to deploy their applications to any AWS or on-premises server?",
                "answers": [
                    "A. Amazon Kinesis.",
                    "B. Amazon QuickSight.",
                    "C. AWS CodeDeploy.",
                    "D. Amazon Athena."
                ],
                "solution": "C"
            },
            {
                "question": "Select the services that are server-based: (Choose TWO)",
                "answers": [
                    "A. Amazon RDS.",
                    "B. Amazon DynamoDB.",
                    "C. AWS Lambda.",
                    "D. AWS Fargate.",
                    "E. Amazon EMR."
                ],
                "solution": "A, E"
            },
            {
                "question": "What best describes penetration testing?",
                "answers": [
                    "A. Testing your application's response time from different locations.",
                    "B. Testing your network to find security vulnerabilities that an attacker could exploit.",
                    "C. Testing your instances to check for the unhealthy ones.",
                    "D. Testing your software for bugs and errors."
                ],
                "solution": "B"
            },
            {
                "question": "Which of the following are use cases for Amazon EMR? (Choose TWO)",
                "answers": [
                    "A. Enables you to backup extremely large amounts of data at very low costs.",
                    "B. Enables you to move Exabyte-scale data from on-premises datacenters into AWS.",
                    "C. Enables you to analyze and process extremely large amounts of data in a timely manner.",
                    "D. Enables you to easily run and scale Apache Spark, Hadoop,and other Big Data frameworks."
                ],
                "solution": "C, D"
            },
            {
                "question": "Your CTO has asked you to contact AWS support using the chat feature to ask for guidance related to EBS. However, when you open the AWS support center you can't see a way to contact support via Chat. What should you do?",
                "answers": [
                    "A. There is no chat feature in AWS support.",
                    "B. The chat feature is available for all plans for an additional fee, but you have to request it first.",
                    "C. At a minimum, upgrade to Business support plan.",
                    "D. Upgrade from the Basic Support plan to Developer Support."
                ],
                "solution": "C"
            },
            {
                "question": "A developer wants to quickly deploy and manage his application in the AWS Cloud, but he doesn't have any experience with cloud computing. Which of the following AWS services would help the developer achieve his goal?",
                "answers": [
                    "A. AWS Fargate.",
                    "B. AWS Batch.",
                    "C. Amazon Personalize.",
                    "D. AWS Elastic Beanstalk."
                ],
                "solution": "D"
            },
            {
                "question": "Which statement best describes the AWS Pay-As-You-Go pricing model?",
                "answers": [
                    "A. With AWS, you replace low upfront expenses with large variable payments.",
                    "B. With AWS, you replace low upfront expenses with large fixed payments.",
                    "C. With AWS, you replace large upfront expenses with low fixed payments.",
                    "D. With AWS, you replace large capital expenses with low variable payments."
                ],
                "solution": "D"
            },
            {
                "question": "For Amazon RDS databases, what does AWS perform on your behalf? (Choose TWO)",
                "answers": [
                    "A. Database setup.",
                    "B. Network traffic protection.",
                    "C. Management of the operating system.",
                    "D. Access management."
                ],
                "solution": "A, C"
            },
            {
                "question": "Which of the following strategies help analyze costs in AWS?",
                "answers": [
                    "A. Using tags to group resources.",
                    "B. Using AWS CloudFormation to automate the deployment of resources.",
                    "C. Deploying resources of the same type in different regions.",
                    "D. Configuring Amazon Inspector to automatically analyze costs and email reports."
                ],
                "solution": "A"
            },
            {
                "question": "A media company has an application that requires the transfer of large data sets to and from AWS every day. This data is business critical and should be transferred over a consistent connection. Which AWS service should the company use?",
                "answers": [
                    "A. AWS Direct Connect.",
                    "B. Amazon Comprehend.",
                    "C. AWS Snowmobile.",
                    "D. AWS VPN."
                ],
                "solution": "A"
            },
            {
                "question": "What is the main benefit of the AWS Storage Gateway service?",
                "answers": [
                    "A. It automates the process of building, maintaining, and running ETL jobs.",
                    "B. It provides physical devices to migrate data from on premises to AWS.",
                    "C. It allows integration of on-premises IT environments with Cloud Storage.",
                    "D. It provides hardware-based key storage for regulatory compliance."
                ],
                "solution": "C"
            },
            {
                "question": "To protect against data loss, you need to backup your database regularly. What is the most cost-effective storage option that provides immediate retrieval of your backups?",
                "answers": [
                    "A. Amazon S3 Glacier Deep Archive.",
                    "B. Amazon S3 Standard-Infrequent Access.",
                    "C. Amazon S3 Glacier.",
                    "D. Instance Store."
                ],
                "solution": "B"
            },
            {
                "question": "Which service can you use to route traffic to the endpoint that provides the best application performance for your users worldwide?",
                "answers": [
                    "A. AWS Global Accelerator.",
                    "B. AWS Data Pipeline.",
                    "C. AWS DAX Accelerator.",
                    "D. AWS Transfer Acceleration."
                ],
                "solution": "A"
            },
            {
                "question": "Why are Serverless Architectures more economical than Server-based Architectures?",
                "answers": [
                    "A. Serverless Architectures use new powerful computing devices.",
                    "B. With the Server-based Architectures, compute resources continue to run all the time but with serverless architecture, compute resources are only used when code is being executed.",
                    "C. When you reserve serverless capacity, you will get large discounts compared to server reservation.",
                    "D. With Serverless Architectures you have the ability to scale automatically up or down as demand changes."
                ],
                "solution": "B"
            },
            {
                "question": "Which of the below options are use cases of the Amazon Route 53 service? (Choose TWO)",
                "answers": [
                    "A. Point-to-point connectivity between an on-premises data center and AWS.",
                    "B. Detects configuration changes in the AWS environment.",
                    "C. DNS configuration and management.",
                    "D. Manages global application traffic through a variety of routing types."
                ],
                "solution": "C, D"
            },
            {
                "question": "You want to transfer 200 Terabytes of data from on-premises locations to the AWS Cloud, which of the following can do the job in a cost-effective way?",
                "answers": [
                    "A. AWS Snowmobile.",
                    "B. AWS Import/Export.",
                    "C. AWS DMS.",
                    "D. AWS Snowball."
                ],
                "solution": "D"
            },
            {
                "question": "You have a real-time IoT application that requires sub-millisecond latency. Which of the following services should you use?",
                "answers": [
                    "A. Amazon Redshift.",
                    "B. Amazon Athena.",
                    "C. AWS Cloud9.",
                    "D. Amazon ElastiCache for Redis."
                ],
                "solution": "D"
            }
        ]
    },
    {
        "name": "Practice Exam 8",
        "questions": [
            {
                "question": "Which of the following can help secure your sensitive data in Amazon S3? (Choose TWO)",
                "answers": [
                    "A. Delete the encryption keys once your data is encrypted.",
                    "B. With AWS you do not need to worry about encryption.",
                    "C. Enable S3 Encryption.",
                    "D. Encrypt the data prior to uploading it."
                ],
                "solution": "C, D"
            },
            {
                "question": "Which AWS service helps developers compile and test their code?",
                "answers": [
                    "A. AWS CodeDeploy.",
                    "B. AWS CodeCommit.",
                    "C. CloudEndure.",
                    "D. AWS CodeBuild."
                ],
                "solution": "D"
            },
            {
                "question": "Which of the following will affect how much you are charged for storing objects in S3? (Choose TWO)",
                "answers": [
                    "A. Using default encryption for any number of S3 buckets.",
                    "B. The number of EBS volumes attached to your instances.",
                    "C. The storage class used for the objects stored.",
                    "D. Creating and deleting S3 buckets.",
                    "E. The total size in gigabytes of all objects stored."
                ],
                "solution": "C, E"
            },
            {
                "question": "What does the Amazon CloudFront service provide? (Choose TWO)",
                "answers": [
                    "A. Tracks user activity and APl usage.",
                    "B. Increases application availability by caching at the edge.",
                    "C. Enables faster disaster recovery.",
                    "D. Stores archived data at very low costs.",
                    "E. Delivers content to end users with low latency."
                ],
                "solution": "B, E"
            },
            {
                "question": "You are facing a lot of problems with your current contact center. Which service provides a cloud-based contact center that can deliver a better service for your customers?",
                "answers": [
                    "A. Amazon Lightsail.",
                    "B. Amazon Connect.",
                    "C. AWS Direct Connect.",
                    "D. AWS Elastic Beanstalk."
                ],
                "solution": "B"
            },
            {
                "question": "You have migrated your application to AWS recently. How can you view the AWS costs applied to your account?",
                "answers": [
                    "A. Using the AWS Cost & Usage Report.",
                    "B. Using the AWS Total Cost of Ownership (TCO) dashboard.",
                    "C. Using the AWS CloudWatch logs dashboard.",
                    "D. Using the Amazon VPC dashboard."
                ],
                "solution": "A"
            },
            {
                "question": "Which of the following are valid Amazon EC2 Reserved Instance types? (Choose TWO)",
                "answers": [
                    "A. Convertible.",
                    "B. Expedited.",
                    "C. Bulk.",
                    "D. Spot.",
                    "E. Standard."
                ],
                "solution": "A, E"
            },
            {
                "question": "Which of the following services gives you access to all AWS auditor-issued reports and certifications?",
                "answers": [
                    "A. AWS Artifact.",
                    "B. AWS Config.",
                    "C. Amazon CloudWatch.",
                    "D. AWS CloudTrail."
                ],
                "solution": "A"
            },
            {
                "question": "You manage a blog on AWS that has different environments: development, testing, and production. What can you use to create a custom console for each environment to view and manage your resources easily?",
                "answers": [
                    "A. AWS Resource Groups.",
                    "B. AWS Placement Groups.",
                    "C. AWS Management Console.",
                    "D. AWS Tag Editor."
                ],
                "solution": "A"
            },
            {
                "question": "Which AWS service collects metrics from running EC2 instances?",
                "answers": [
                    "A. Amazon Inspector.",
                    "B. Amazon CloudWatch.",
                    "C. AWS CloudFormation.",
                    "D. AWS CloudTrail."
                ],
                "solution": "B"
            },
            {
                "question": "Your web application currently faces performance issues and suffers from long load times. Which of the following AWS services could help fix these issues and improve performance?",
                "answers": [
                    "A. Amazon Detective.",
                    "B. AWS X-Ray.",
                    "C. AWS Security Hub.",
                    "D. AWS Shield."
                ],
                "solution": "B"
            },
            {
                "question": "Which of the following compute resources are serverless? (Choose TWO)",
                "answers": [
                    "A. Amazon EC2.",
                    "B. AWS Fargate.",
                    "C. AWS Lambda.",
                    "D. Amazon ECS."
                ],
                "solution": "B, C"
            },
            {
                "question": "For compliance and regulatory purposes, a government agency requires that their applications must run on hardware that is dedicated to them only. How can you meet this requirement?",
                "answers": [
                    "A. Use EC2 Dedicated Hosts.",
                    "B. Use EC2 Reserved Instances.",
                    "C. Use EC2 Spot Instances.",
                    "D. Use EC2 On-demand Instances."
                ],
                "solution": "A"
            },
            {
                "question": "Which AWS Cost Governance best practice recommends refining workloads regularly to make the most of existing AWS resources and reduce costs?",
                "answers": [
                    "A. Tagging Enforcement.",
                    "B. Architecture Optimization.",
                    "C. Budgeting Processes.",
                    "D. Resource Controls."
                ],
                "solution": "B"
            },
            {
                "question": "An organization needs to build a financial application that requires support for ACID transactions. Which AWS database service is most appropriate in this case?",
                "answers": [
                    "A. RedShift.",
                    "B. RDS.",
                    "C. CloudHSM.",
                    "D. DMS."
                ],
                "solution": "B"
            },
            {
                "question": "What can you use to assign permissions directly to an IAM user?",
                "answers": [
                    "A. IAM Identity.",
                    "B. IAM Group.",
                    "C. IAM Role.",
                    "D. IAM Policy."
                ],
                "solution": "D"
            },
            {
                "question": "The owner of an E-Commerce application notices that the compute capacity requirements vary heavily from time to time. What makes AWS more economical than traditional data centers for this type of application?",
                "answers": [
                    "A. AWS allows customers to launch powerful EC2 instances to handle spikes in load.",
                    "B. AWS allows customers to pay upfront to get bigger discounts.",
                    "C. AWS allows customers to launch and terminate EC2 instances based on demand.",
                    "D. AWS allows customers to choose cheaper types of EC2 instances that best fit their needs."
                ],
                "solution": "C"
            },
            {
                "question": "Amazon RDS supports multiple database engines to choose from. Which of the following is not one of them?",
                "answers": [
                    "A. PostgreSQL.",
                    "B. Oracle.",
                    "C. Microsoft SQL Server.",
                    "D. Teradata."
                ],
                "solution": "D"
            },
            {
                "question": "Which of the following AWS services would help you migrate on-premise databases to AWS?",
                "answers": [
                    "A. AWS DMS.",
                    "B. Amazon S3 Transfer Acceleration.",
                    "C. AWS Directory Service.",
                    "D. AWS Transit Gateway."
                ],
                "solution": "A"
            },
            {
                "question": "For new AWS customers, what is the EASIEST way to launch a simple WordPress website on AWS?",
                "answers": [
                    "A. Run WordPress on an Amazon Lightsail instance.",
                    "B. Install WordPress on an Amazon EC2 instance.",
                    "C. Use the Amazon S3 Web hosting feature.",
                    "D. Host the website directly on AWS Cloud Development Kit (AWS CDK)."
                ],
                "solution": "A"
            },
            {
                "question": "Which of the following would you use to manage your encryption keys in the AWS Cloud? (Choose TWO)",
                "answers": [
                    "A. AWS KMS.",
                    "B. AWS Certificate Manager.",
                    "C. AWS CodeDeploy.",
                    "D. AWS CodeCommit.",
                    "E. CloudHSM."
                ],
                "solution": "A, E"
            },
            {
                "question": "Which of the following services allows you to install and run custom relational database software?",
                "answers": [
                    "A. Amazon EC2.",
                    "B. Amazon Cognito.",
                    "C. Amazon RDS.",
                    "D. Amazon Inspector."
                ],
                "solution": "A"
            },
            {
                "question": "Your application requirements for CPU and RAM are changing in an unpredictable way. Which service can be used to dynamically adjust these resources based on load?",
                "answers": [
                    "A. Auto Scaling.",
                    "B. ELB.",
                    "C. Amazon Route53.",
                    "D. Amazon Elastic Container Service."
                ],
                "solution": "A"
            },
            {
                "question": "A company has infrastructure hosted in an on-premises data center. They currently have an operations team that takes care of identity management. If they decide to migrate to the AWS cloud, which of the following services would help them perform the same role in AWS?",
                "answers": [
                    "A. AWS IAM.",
                    "B. AWS Outposts.",
                    "C. AWS Federation.",
                    "D. Amazon Redshift."
                ],
                "solution": "A"
            },
            {
                "question": "What are some key design principles for designing public cloud systems? (Choose TWO)",
                "answers": [
                    "A. Reserved capacity instead of on demand.",
                    "B. Loose coupling over tight coupling.",
                    "C. Servers instead of managed services.",
                    "D. Disposable resources instead of fixed servers."
                ],
                "solution": "B, D"
            },
            {
                "question": "Where can AWS account owners get a list of all users in their account, including the status of their AWS credentials?",
                "answers": [
                    "A. AWS CloudTrail Trails.",
                    "B. IAM Credential Report.",
                    "C. AWS Artifact reports.",
                    "D. AWS Cost and Usage Report."
                ],
                "solution": "B"
            },
            {
                "question": "Which of the following services enables you to easily generate and use your own encryption keys in the AWS Cloud?",
                "answers": [
                    "A. AWS Shield.",
                    "B. AWS Certificate Manager.",
                    "C. AWS CloudHSM.",
                    "D. AWS WAF."
                ],
                "solution": "C"
            },
            {
                "question": "You have developed a web application targeting a global audience. Which of the following will help you achieve the highest redundancy and fault tolerance from an infrastructure perspective?",
                "answers": [
                    "A. There is no need to architect for these capabilities in AWS, as AWS is redundant by default.",
                    "B. Deploy the application in a single Availability Zone.",
                    "C. Deploy the application in multiple Availability Zones in a single AWS region.",
                    "D. Deploy the application in multiple Availability Zones in multiple AWS regions."
                ],
                "solution": "D"
            },
            {
                "question": "For some services, AWS automatically replicates data across multiple Availability Zones to provide fault tolerance in the event of a server failure or Availability Zone outage. Select TWO services that automatically replicate data across Availability Zones.",
                "answers": [
                    "A. Instance Store.",
                    "B. S3.",
                    "C. DynamoDB.",
                    "D. Amazon Route 53."
                ],
                "solution": "B, C"
            },
            {
                "question": "Which of the following factors affect Amazon CloudFront cost? (Choose TWO)",
                "answers": [
                    "A. Number of Requests.",
                    "B. Traffic Distribution.",
                    "C. Number of Volumes.",
                    "D. Instance type."
                ],
                "solution": "A, B"
            },
            {
                "question": "Which of the following resources can an AWS customer use to learn more about prohibited uses of the services offered by AWS?",
                "answers": [
                    "A. AWS Service Control Policies (SCPs).",
                    "B. AWS Artifact.",
                    "C. AWS Budgets.",
                    "D. AWS Acceptable Use Policy."
                ],
                "solution": "D"
            },
            {
                "question": "Which of the following security resources are available to any user for free? (Choose TWO)",
                "answers": [
                    "A. AWS Bulletins.",
                    "B. AWS TAM.",
                    "C. AWS Support APl.",
                    "D. AWS Security Blog."
                ],
                "solution": "A, D"
            },
            {
                "question": "How can you protect data stored on Amazon S3 from accidental deletion?",
                "answers": [
                    "A. By enabling S3 Versioning.",
                    "B. By configuring S3 Bucket Policies.",
                    "C. By configuring S3 Lifecycle Policies.",
                    "D. By disabling S3 Cross-Region Replication (CRR)."
                ],
                "solution": "A"
            },
            {
                "question": "Which of the following is the responsibility of AWS according to the AWS Shared Responsibility Model?",
                "answers": [
                    "A. Securing regions and edge locations.",
                    "B. Performing auditing tasks.",
                    "C. Monitoring AWS resources usage.",
                    "D. Securing access to AWS resources."
                ],
                "solution": "A"
            },
            {
                "question": "Which of the following AWS support plans provides access to only the seven core AWS Trusted Advisor checks?",
                "answers": [
                    "A. Business & Enterprise Support.",
                    "B. Basic & Developer Support.",
                    "C. Developer & Enterprise Support.",
                    "D. Developer & Business Support."
                ],
                "solution": "B"
            },
            {
                "question": "Which of the following is NOT a benefit of using AWS Lambda?",
                "answers": [
                    "A. AWS Lambda runs code without provisioning or managing servers.",
                    "B. AWS Lambda provides resizable compute capacity in the cloud.",
                    "C. There is no charge when your AWS Lambda code is not running.",
                    "D. AWS Lambda can be called directly from any mobile app."
                ],
                "solution": "D"
            },
            {
                "question": "How does AWS help customers achieve compliance in the cloud?",
                "answers": [
                    "A. It's not possible to meet regulatory compliance requirements in the Cloud.",
                    "B. AWS applies the most common Cloud security standards, and is responsible for complying with customers' applicable laws and regulations.",
                    "C. AWS has many common assurance certifications such as ISO 9001 and HIPAA.",
                    "D. Many AWS services are assessed regularly to comply with local laws and regulations."
                ],
                "solution": "C"
            },
            {
                "question": "Who is responsible for scaling a DynamoDB database in the AWS Shared Responsibility Model?",
                "answers": [
                    "A. Your security team.",
                    "B. Your development team.",
                    "C. AWS.",
                    "D. Your internal DevOps team."
                ],
                "solution": "C"
            },
            {
                "question": "You are working as a web app developer. You are currently facing issues in media playback for mobile devices because your media format is not supported. Which of the following AWS services can help you convert your media into another format?",
                "answers": [
                    "A. Amazon Elastic Transcoder.",
                    "B. Amazon Pinpoint.",
                    "C. AmazonS3.",
                    "D. Amazon Rekognition."
                ],
                "solution": "A"
            },
            {
                "question": "What are the benefits of the AWS Organizations service? (Choose TWO)",
                "answers": [
                    "A. Control access to AWS services.",
                    "B. Help organizations design and maintain an accelerated path to successful cloud adoption.",
                    "C. Manage your organization's payment methods.",
                    "D. Help organization achieve their desired business outcomes with AWS.",
                    "E. Consolidate billing across multiple AWS accounts."
                ],
                "solution": "A, E"
            },
            {
                "question": "Which AWS service allows you to build a data warehouse in the cloud?",
                "answers": [
                    "A. AWS Shield.",
                    "B. Amazon Redshift.",
                    "C. Amazon RDS.",
                    "D. Amazon Comprehend."
                ],
                "solution": "B"
            },
            {
                "question": "What AWS service allows you to buy third-party software solutions and services that run on AWS resources?",
                "answers": [
                    "A. AWS Application Discovery service.",
                    "B. Amazon DevPay.",
                    "C. AWS Marketplace.",
                    "D. Resource Groups."
                ],
                "solution": "C"
            },
            {
                "question": "Which of the following services is an AWS repository management system that allows for storing, versioning, and managing your application code?",
                "answers": [
                    "A. AWS CodePipeline.",
                    "B. AWS CodeCommit.",
                    "C. AWS X-Ray.",
                    "D. Amazon Inspector."
                ],
                "solution": "B"
            },
            {
                "question": "Which AWS service can be used to route end users to the nearest AWS Region to reduce latency?",
                "answers": [
                    "A. Amazon Cognito.",
                    "B. AWS Systems Manager.",
                    "C. AWS Cloud9.",
                    "D. Amazon Route 53."
                ],
                "solution": "D"
            },
            {
                "question": "Which feature enables users to sign into their AWS accounts with their existing corporate credentials?",
                "answers": [
                    "A. Federation.",
                    "B. Access keys.",
                    "C. IAM Permissions.",
                    "D. WAF rules."
                ],
                "solution": "A"
            },
            {
                "question": "According to the AWS shared responsibility model, what are the controls that customers fully inherit from AWS? (Choose TWO)",
                "answers": [
                    "A. Awareness and Training.",
                    "B. Communications controls.",
                    "C. Data center security controls.",
                    "D. Environmental controls."
                ],
                "solution": "C, D"
            },
            {
                "question": "What can you access by visiting the URL: <http://status.aws.amazon.com>?",
                "answers": [
                    "A. AWS Billing Dashboard.",
                    "B. AWS Cost Dashboard.",
                    "C. AWS Service Health Dashboard.",
                    "D. AWS Security Dashboard."
                ],
                "solution": "C"
            },
            {
                "question": "Which of the following procedures can reduce latency when your end users are retrieving data? (Choose TWO)",
                "answers": [
                    "A. Store media assets in the region closest to your end users.",
                    "B. Store media assets on an additional EBS volume and increase the capacity of your server.",
                    "C. Replicate media assets to at least two availability zones.",
                    "D. Reduce the size of media assets using the Amazon Elastic Transcoder.",
                    "E. Store media assets in S3 and use CloudFront to distribute these assets."
                ],
                "solution": "A, E"
            },
            {
                "question": "Which of the following are part of the seven design principles for security in the cloud? (Choose TWO)",
                "answers": [
                    "A. Use manual monitoring techniques to protect your AWS resources.",
                    "B. Use IAM roles to grant temporary access instead of long-term credentials.",
                    "C. Scale horizontally to protect from failures.",
                    "D. Enable real-time traceability."
                ],
                "solution": "B, D"
            },
            {
                "question": "A company is migrating production workloads to AWS, and they are concerned about cost management across different departments. Which option should the company implement to categorize and track AWS spending?",
                "answers": [
                    "A. Use the AWS Pricing Calculator service to monitor the costs incurred by each department.",
                    "B. Use Amazon Aurora to forecast AWS spending based on usage.",
                    "C. Apply cost allocation tags to segment AWS costs by different e projects and departments.",
                    "D. Configure AWS Price List API to receive billing updates for each department automatically."
                ],
                "solution": "C"
            }
        ]
    },
    {
        "name": "Practice Exam 9",
        "questions": [
            {
                "question": "What is the main benefit of attaching security groups to an Amazon RDS instance?",
                "answers": [
                    "A. Manages user access and encryption keys.",
                    "B. Controls what IP address ranges can connect to your database instance.",
                    "C. Deploys SSL/TLS certificates for use with your database instance.",
                    "D. Distributes incoming traffic across multiple targets."
                ],
                "solution": "B"
            },
            {
                "question": "A company wants to use Amazon Elastic Container Service (Amazon ECS) to run its containerized applications. For compliance reasons, the company wants to retain complete visibility and control over the underlying server cluster. Which Amazon ECS launch type will satisfy these requirements?",
                "answers": [
                    "A. EC2 launch type.",
                    "B. Fargate launch type.",
                    "C. Lightsail launch type.",
                    "D. Lambda launch type."
                ],
                "solution": "A"
            },
            {
                "question": "You have multiple standalone AWS accounts and you want to decrease your AWS monthly charges. What should you do?",
                "answers": [
                    "A. Try to remove unnecessary AWS accounts.",
                    "B. Add the accounts to an AWS Organization and use Consolidated Billing.",
                    "C. Track the AWS charges that are incurred by the member accounts.",
                    "D. Enable AWS tiered-pricing before provisioning resources."
                ],
                "solution": "B"
            },
            {
                "question": "You have been tasked with auditing the security of your VPC. As part of this process, you need to start by analyzing what inbound and outbound traffic is allowed on your EC2 instances. What two parts of the VPC do you need to check to accomplish this task?",
                "answers": [
                    "A. Network ACLs and Traffic Manager.",
                    "B. Network ACLs and Subnets.",
                    "C. Security Groups and Internet Gateways.",
                    "D. Security Groups and Network ACLs."
                ],
                "solution": "D"
            },
            {
                "question": "What does the AWS \"Business\" support plan provide? (Choose TWO)",
                "answers": [
                    "A. Access to the full set of Trusted Advisor checks.",
                    "B. Support Concierge Service.",
                    "C. Less than 15 minutes response-time support if your business critical system goes down.",
                    "D. AWS Support API."
                ],
                "solution": "A, D"
            },
            {
                "question": "You have just finished writing your application code. Which service can be used to automate the deployment and scaling of your application?",
                "answers": [
                    "A. Amazon Simple Storage Service.",
                    "B. AWS Elastic Beanstalk.",
                    "C. AWS CodeCommit.",
                    "D. Amazon Elastic File System."
                ],
                "solution": "B"
            },
            {
                "question": "Which statement is true in relation to security in AWS?",
                "answers": [
                    "A. AWS manages everything related to EC2 operating systems.",
                    "B. AWS customers are responsible for patching any database software running on Amazon EC2.",
                    "C. Server side encryption is the responsibility of AWS.",
                    "D. AWS is responsible for the security of your application."
                ],
                "solution": "B"
            },
            {
                "question": "Amazon EC2 instances are conceptually very similar to traditional servers. However, using Amazon EC2 server instances in the same manner as traditional hardware server instances is only a starting point. What are the main benefits of using the AWS EC2 instances instead of traditional servers? (Choose TWO)",
                "answers": [
                    "A. Improves Fault-Tolerance.",
                    "B. Provides your business with a seamless remote accessibility.",
                    "C. Prevents unauthorized users from getting into your network.",
                    "D. Provides automatic data backups.",
                    "E. Can be scaled manually in a shorter period of time."
                ],
                "solution": "A, E"
            },
            {
                "question": "Which statement is true regarding AWS pricing? (Choose TWO)",
                "answers": [
                    "A. With the AWS pay-as-you-go pricing model, you don't have to pay any upfront fee.",
                    "B. You have no responsibility for third-party software license costs.",
                    "C. You only pay for the individual services that you need with no long-term contracts.",
                    "D. For some services, you have to pay a startup fee in order to get the service running."
                ],
                "solution": "A, C"
            },
            {
                "question": "Which AWS service provides the EASIEST way to set up and manage a secure, well-architected, multi-account AWS environment?",
                "answers": [
                    "A. AWS Control Tower.",
                    "B. Amazon Macie.",
                    "C. AWS Systems Manager Patch Manager.",
                    "D. AWS Security Hub."
                ],
                "solution": "A"
            },
            {
                "question": "A company is running a large web application that needs to always be available. The application tends to slow down when CPU usage is greater than 60%. How can they track when CPU usage goes above 60% for any of the EC2 Instances in their account?",
                "answers": [
                    "A. Use CloudFront to monitor the CPU usage.",
                    "B. Set the AWS Config CPU threshold to 60% to receive a notification when EC2 usage exceeds that value.",
                    "C. Use CloudWatch Alarms to monitor the CPU and alert when the CPU usage is >= 60%.",
                    "D. Use SNS to monitor the utilization of the server."
                ],
                "solution": "C"
            },
            {
                "question": "What is the recommended storage option when hosting an often-changing database on an Amazon EC2 instance?",
                "answers": [
                    "A. Amazon EBS.",
                    "B. Amazon RDS.",
                    "C. You can't run a database inside an Amazon EC2 instance.",
                    "D. Amazon DynamoDB."
                ],
                "solution": "A"
            },
            {
                "question": "You are working as a site reliability engineer (SRE) in an AWS environment, which of the following services helps monitor your applications?",
                "answers": [
                    "A. Amazon CloudWatch.",
                    "B. Amazon CloudSearch.",
                    "C. Amazon Elastic MapReduce.",
                    "D. Amazon CloudHSM."
                ],
                "solution": "A"
            },
            {
                "question": "What factors determine how you are charged when using AWS Lambda? (Choose TWO)",
                "answers": [
                    "A. Storage consumed.",
                    "B. Number of requests to your functions.",
                    "C. Number of volumes.",
                    "D. Placement groups.",
                    "E. Compute time consumed."
                ],
                "solution": "B, E"
            },
            {
                "question": "What are the main differences between an IAM user and an IAM role in AWS? (Choose TWO)",
                "answers": [
                    "A. An IAM user is uniquely associated with only one person, however a role is intended to be assumable by anyone who needs it.",
                    "B. An IAM user has permanent credentials associated with it, however a role has temporary credentials associated with it.",
                    "C. IAM users are more cost effective than IAM roles.",
                    "D. A role is uniquely associated with only one person, however an IAM user is intended to be assumable by anyone who needs it."
                ],
                "solution": "A, B"
            },
            {
                "question": "Which of the following actions may reduce Amazon EBS costs? (Choose TWO)",
                "answers": [
                    "A. Deleting unused buckets.",
                    "B. Using reservations.",
                    "C. Deleting unnecessary snapshots.",
                    "D. Changing the type of the volume."
                ],
                "solution": "C, D"
            },
            {
                "question": "What does Amazon GuardDuty do to protect AWS accounts and workloads?",
                "answers": [
                    "A. Notifies AWS customers about abuse events once they are reported.",
                    "B. Continuously monitors AWS infrastructure and helps detect threats such as attacker reconnaissance or account compromise.",
                    "C. Helps AWS customers identify the root cause of potential security issues.",
                    "D. Checks security groups for rules that allow unrestricted access to AWS. resources."
                ],
                "solution": "B"
            },
            {
                "question": "Which database service should you use if your application and data schema require \"joins\" or complex transactions?",
                "answers": [
                    "A. Amazon RDS.",
                    "B. AWS Outposts.",
                    "C. Amazon DocumentDB.",
                    "D. Amazon DynamoDB."
                ],
                "solution": "A"
            },
            {
                "question": "Which of the following makes it easier for you to categorize, manage and filter your resources?",
                "answers": [
                    "A. Amazon CloudWatch.",
                    "B. AWS Service Catalog.",
                    "C. AWS Directory Service.",
                    "D. AWS Tagging."
                ],
                "solution": "D"
            },
            {
                "question": "What should you consider when storing data in Amazon Glacier?",
                "answers": [
                    "A. Amazon Glacier only accepts data in a compressed format.",
                    "B. Glacier can only be used to store frequently accessed data and data archives.",
                    "C. Amazon Glacier does not provide immediate retrieval of data.",
                    "D. Attach Glacier to an EC2 Instance to be able to store data."
                ],
                "solution": "C"
            },
            {
                "question": "Engineers are wasting a lot of time and effort managing batch computing software in traditional data centers. Which of the following AWS services allows them to easily run thousands of batch computing jobs?",
                "answers": [
                    "A. Amazon EC2.",
                    "B. AWS Batch.",
                    "C. Lambda@Edge.",
                    "D. AWS Fargate."
                ],
                "solution": "B"
            },
            {
                "question": "How can you increase your application's fault-tolerance while it is being hosted in AWS?",
                "answers": [
                    "A. Deploy your application across multiple EC2 instances.",
                    "B. Deploy your application across multiple Availability Zones.",
                    "C. Host your application on one powerful EC2 instance type instead of multiple smaller instances.",
                    "D. Deploy the underlying application resources across multiple subnets."
                ],
                "solution": "B"
            },
            {
                "question": "Which of the following AWS Support Plans gives you 24/7 access to Cloud Support Engineers via email & phone? (Choose TWO)",
                "answers": [
                    "A. Developer.",
                    "B. Premium.",
                    "C. Enterprise.",
                    "D. Standard.",
                    "E. Business."
                ],
                "solution": "C, E"
            },
            {
                "question": "Which of the following requires an access key ID and a secret access key to get long-lived programmatic access to AWS resources? (Choose TWO)",
                "answers": [
                    "A. IAM group.",
                    "B. IAM user.",
                    "C. IAM role.",
                    "D. AWS account root user."
                ],
                "solution": "B, D"
            },
            {
                "question": "Which of the following is a benefit of the \"Loose Coupling\" architecture principle?",
                "answers": [
                    "A. It eliminates the need for change management.",
                    "B. It allows for Cross-Region Replication.",
                    "C. It helps AWS customers reduce Privileged Access to AWS resources.",
                    "D. It allows individual application components or services to be modified without affecting other components."
                ],
                "solution": "D"
            },
            {
                "question": "A company needs to host a big data application on AWS using EC2 instances. Which of the following AWS Storage services would they choose to automatically get high throughput to multiple compute nodes?",
                "answers": [
                    "A. Amazon Elastic Block Store.",
                    "B. AWS Storage Gateway.",
                    "C. Amazon Elastic File System.",
                    "D. S3."
                ],
                "solution": "C"
            },
            {
                "question": "Which of the following Cloud Computing deployment models eliminates the need to run and maintain physical data centers?",
                "answers": [
                    "A. On-premises.",
                    "B. IaaS.",
                    "C. PaaS.",
                    "D. Cloud."
                ],
                "solution": "D"
            },
            {
                "question": "What are the benefits of the AWS Marketplace service? (Choose TWO)",
                "answers": [
                    "A. Protects customers by performing periodic security checks on listed products.",
                    "B. Per-second billing.",
                    "C. Provides cheaper options for purchasing Amazon EC2 on-demand instances.",
                    "D. Provides flexible pricing options that suit most customer needs."
                ],
                "solution": "A, D"
            },
            {
                "question": "What is the benefit of Amazon EBS volumes being automatically replicated within the same availability zone?",
                "answers": [
                    "A. Elasticity.",
                    "B. Durability.",
                    "C. Traceability.",
                    "D. Accessibility."
                ],
                "solution": "B"
            },
            {
                "question": "You are planning to launch an advertising campaign over the coming weekend to promote a new digital product. It is expected that there will be heavy spikes in load during the campaign period, and you can't afford any downtime. You need additional compute resources to handle the additional load. What is the most cost-effective EC2 instance purchasing option for this job?",
                "answers": [
                    "A. Savings Plans.",
                    "B. Spot Instances.",
                    "C. Reserved Instances.",
                    "D. On-Demand Instances."
                ],
                "solution": "D"
            },
            {
                "question": "Which of the following AWS services integrates with AWS Shield and AWS Web Application Firewall (AWS WAF) to protect against network and application layer DDoS attacks?",
                "answers": [
                    "A. Amazon EFS.",
                    "B. AWS Secrets Manager.",
                    "C. AWS Systems Manager.",
                    "D. Amazon CloudFront."
                ],
                "solution": "D"
            },
            {
                "question": "Which of the following services is used when encrypting EBS volumes?",
                "answers": [
                    "A. AWS WAF.",
                    "B. AWS KMS.",
                    "C. Amazon Macie.",
                    "D. Amazon GuardDuty."
                ],
                "solution": "B"
            },
            {
                "question": "The AWS account administrator of your company has been fired. With the permissions granted to him as an administrator, he was able to create multiple IAM user accounts and access keys. Additionally, you are not sure whether he has access to the AWS root account or not. What should you do immediately to protect your AWS infrastructure? (Choose TWO)",
                "answers": [
                    "A. Download all the attached policies in a safe place.",
                    "B. Delete all IAM accounts and recreate them.",
                    "C. Use the CloudWatch service to check all API calls that have been made in your account since the administrator was fired.",
                    "D. Rotate all access keys.",
                    "E. Change the email address and password of the root user account and enable MFA."
                ],
                "solution": "D, E"
            },
            {
                "question": "What is the Amazon ElastiCache service used for? (Choose TWO)",
                "answers": [
                    "A. Provide an in-memory data storage service.",
                    "B. Reduce delivery costs using Edge Locations.",
                    "C. Improve web application performance.",
                    "D. Provide a Chef-compatible cache to speed up application response."
                ],
                "solution": "A, C"
            },
            {
                "question": "The elasticity of the AWS Cloud enables customers to save costs when compared to traditional hosting providers. What can AWS customers do to benefit from the elasticity of the AWS Cloud? (Choose TWO)",
                "answers": [
                    "A. Deploy your resources across multiple Availability Zones.",
                    "B. Use Amazon EC2 Auto Scaling.",
                    "C. Deploy your resources in another region.",
                    "D. Use Elastic Load Balancing.",
                    "E. Use Serverless Computing whenever possible."
                ],
                "solution": "B, E"
            },
            {
                "question": "What are some of the benefits of using On-Demand EC2 instances? (Choose TWO)",
                "answers": [
                    "A. They provide free capacity when testing your new applications.",
                    "B. They are cheaper than all other EC2 options.",
                    "C. They remove the need to buy safety net capacity to handle periodic traffic spikes.",
                    "D. They only require 1-2 days for setup and configuration.",
                    "E. You can increase or decrease your compute capacity depending on the demands of your application."
                ],
                "solution": "C, E"
            },
            {
                "question": "Each AWS Region is composed of multiple Availability Zones. Which of the following best describes what an Availability Zone is?",
                "answers": [
                    "A. It is a data center designed to be completely isolated from other data centers in the same region.",
                    "B. It is a collection of data centers distributed in multiple countries.",
                    "C. It is a logically isolated network of the AWS Cloud.",
                    "D. It is a distinct location within a region that is insulated from \u00ab failures in other Availability Zones."
                ],
                "solution": "D"
            },
            {
                "question": "AWS provides disaster recovery capability by allowing customers to deploy infrastructure into multiple [...].",
                "answers": [
                    "A. Regions.",
                    "B. Transportation devices.",
                    "C. Support plans.",
                    "D. Edge locations."
                ],
                "solution": "A"
            },
            {
                "question": "A financial services company decides to migrate one of its applications to AWS. The application deals with sensitive data, such as credit card information, and must run on a PCI-compliant environment. Which of the following is the company's responsibility when building a PCI-compliant environment in AWS? (Choose TWO)",
                "answers": [
                    "A. Start the migration process immediately as all AWS services are PCI compliant.",
                    "B. Ensure that AWS services are configured properly to meet all PCI DSS standards.",
                    "C. Restrict any access to cardholder data and create a policy that addresses information security for all personnel.",
                    "D. Configure the underlying infrastructure of AWS services to meet all PCI DSS requirements."
                ],
                "solution": "B, C"
            },
            {
                "question": "What is the maximum amount of data that can be stored in S3 in a single AWS account?",
                "answers": [
                    "A. 100 PetaBytes.",
                    "B. Virtually unlimited storage.",
                    "C. 5TeraBytes.",
                    "D. 10 Exabytes."
                ],
                "solution": "B"
            },
            {
                "question": "Which pillar of the AWS Well-Architected Framework provides recommendations to help customers select the right compute resources based on workload requirements?",
                "answers": [
                    "A. Operational Excellence.",
                    "B. Security.",
                    "C. Performance Efficiency.",
                    "D. Reliability."
                ],
                "solution": "C"
            },
            {
                "question": "Which AWS service delivers data, videos, applications, and APIs to users globally with low latency and high transfer speeds?",
                "answers": [
                    "A. Amazon Route 53.",
                    "B. Amazon Connect.",
                    "C. Amazon CloudFront.",
                    "D. Amazon EC2."
                ],
                "solution": "C"
            },
            {
                "question": "Which of the following steps should be taken by a customer when conducting penetration testing on AWS?",
                "answers": [
                    "A. Conduct penetration testing using Amazon Inspector, and then notify AWS support.",
                    "B. Request and wait for approval from the customer's internal security team, and then conduct testing.",
                    "C. Notify AWS support, and then conduct testing immediately.",
                    "D. Request and wait for approval from AWS support, and then conduct testing."
                ],
                "solution": "D"
            },
            {
                "question": "Which AWS Cost Management tool allows you to view the most granular data about your AWS bill?",
                "answers": [
                    "A. AWS Cost Explorer.",
                    "B. AWS Budgets.",
                    "C. AWS Cost and Usage report.",
                    "D. AWS Billing dashboard."
                ],
                "solution": "C"
            },
            {
                "question": "Which element of the AWS global infrastructure consists of one or more discrete data centers each with redundant power networking and connectivity which are housed in separate facilities?",
                "answers": [
                    "A. AWS Regions.",
                    "B. Availability Zones.",
                    "C. Edge locations.",
                    "D. Amazon CloudFront."
                ],
                "solution": "B"
            },
            {
                "question": "How many Availability Zones should compute resources be provisioned across to achieve high availability?",
                "answers": [
                    "A. A minimum of one.",
                    "B. A minimum of two.",
                    "C. A minimum of three.",
                    "D. A minimum of four or more."
                ],
                "solution": "B"
            },
            {
                "question": "The AWS Cloud's multiple Regions are an example of:",
                "answers": [
                    "A. Agility.",
                    "B. Global infrastructure.",
                    "C. Elasticity.",
                    "D. Pay-as-you-go pricing."
                ],
                "solution": "B"
            },
            {
                "question": "Which AWS service can be used to manually launch instances based on resource requirements?",
                "answers": [
                    "A. Amazon EBS.",
                    "B. Amazon S3.",
                    "C. Amazon EC2.",
                    "D. Amazon ECS."
                ],
                "solution": "C"
            },
            {
                "question": "Which is a recommended pattern for designing a highly available architecture on AWS?",
                "answers": [
                    "A. Ensure that components have low-latency network connectivity.",
                    "B. Run enough Amazon EC2 instances to operate at peak load.",
                    "C. Ensure that the application is designed to accommodate failure of any single component.",
                    "D. Use a monolithic application that handles all operations."
                ],
                "solution": "C"
            },
            {
                "question": "Which AWS characteristics make AWS cost effective for a workload with dynamic user demand? (Select TWO)",
                "answers": [
                    "A. High availability.",
                    "B. Shared security model.",
                    "C. Elasticity.",
                    "D. Pay-as-you-go pricing."
                ],
                "solution": "C, D"
            }
        ]
    },
    {
        "name": "Practice Exam 10",
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
                    "D. Encryption usage."
                ],
                "solution": "B, C"
            },
            {
                "question": "Which AWS service identifies security groups that allow unrestricted access to a user's AWS resources?",
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
                "question": "Which AWS feature will reduce the customer's total cost of ownership (TCO)?",
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
                    "D. Performance."
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
                "question": "Under the AWS shared responsibility model, which of the following activities are the customer's responsibility? (Select TWO)",
                "answers": [
                    "A. Patching operating system components for Amazon Relational Database Server (Amazon RDS).",
                    "B. Encrypting data on the client-side.",
                    "C. Training the data center staff.",
                    "D. Configuring Network Access Control Lists (ACL)."
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
                "question": "Which AWS service is used to pay AWS bills, and monitor usage and budget costs?",
                "answers": [
                    "A. AWS Billing and Cost Management.",
                    "B. Consolidated billing.",
                    "C. Amazon CloudWatch.",
                    "D. Amazon QuickSight."
                ],
                "solution": "A"
            },
            {
                "question": "How do customers benefit from Amazon's massive economies of scale?",
                "answers": [
                    "A. Periodic price reductions as the result of Amazon's operational efficiencies.",
                    "B. New Amazon EC2 instance types providing the latest hardware.",
                    "C. The ability to scale up and down when needed.",
                    "D. Increased reliability in the underlying hardware of Amazon EC2 instances."
                ],
                "solution": "A"
            },
            {
                "question": "Which AWS feature allows a company to take advantage of usage tiers for services across multiple member accounts?",
                "answers": [
                    "A. Service control policies (SCPs).",
                    "B. Consolidated billing.",
                    "C. All Upfront Reserved Instances.",
                    "D. AWS Cost Explorer."
                ],
                "solution": "B"
            },
            {
                "question": "Which AWS services provide a way to extend an on-premises architecture to the aws cloud? (Select TWO)",
                "answers": [
                    "A. Amazon EBS.",
                    "B. Amazon Connect.",
                    "C. AWS Storage Gateway.",
                    "D. Amazon CloudFront.",
                    "E. AWS Direct Connect."
                ],
                "solution": "C, E"
            },
            {
                "question": "Which of the following services will automatically scale with an expected increase in web traffic?",
                "answers": [
                    "A. AWS CodePipeline.",
                    "B. Elastic Load Balancing.",
                    "C. Amazon EBS.",
                    "D. AWS Direct Connect."
                ],
                "solution": "B"
            },
            {
                "question": "Which service provides a virtually unlimited amount of online highly durable object storage?",
                "answers": [
                    "A. Amazon Redshift.",
                    "B. Amazon Elastic File System (Amazon EFS).",
                    "C. Amazon Elastic Container Service (Amazon ECS).",
                    "D. Amazon S3."
                ],
                "solution": "D"
            },
            {
                "question": "Which AWS feature should a customer leverage to achieve high availability of an application?",
                "answers": [
                    "A. AWS Direct Connect.",
                    "B. Availability Zones.",
                    "C. Data centers.",
                    "D. Amazon Virtual Private Cloud (Amazon VPC)."
                ],
                "solution": "B"
            },
            {
                "question": "Which AWS service or feature can enhance network security by blocking requests from a particular network for a web application on AWS? (Select TWO)",
                "answers": [
                    "A. AWS WAF.",
                    "B. AWS Trusted Advisor.",
                    "C. AWS Direct Connect.",
                    "D. AWS Organizations.",
                    "E. Network ACLs."
                ],
                "solution": "A, E"
            },
            {
                "question": "Which of the following is a cloud architectural design principle?",
                "answers": [
                    "A. Scale up not out.",
                    "B. Loosely couple components.",
                    "C. Build monolithic systems.",
                    "D. Use commercial database software."
                ],
                "solution": "B"
            },
            {
                "question": "Which service enables risk auditing by continuously monitoring and logging account activity, including user actions in the AWS Management Console and AWS SDKs?",
                "answers": [
                    "A. Amazon CloudWatch.",
                    "B. AWS CloudTrail.",
                    "C. AWS Config.",
                    "D. AWS Health."
                ],
                "solution": "B"
            },
            {
                "question": "Where can AWS compliance and certification reports be downloaded?",
                "answers": [
                    "A. AWS Artifact.",
                    "B. AWS Concierge.",
                    "C. AWS Certificate Manager.",
                    "D. AWS Trusted Advisor."
                ],
                "solution": "A"
            },
            {
                "question": "The financial benefits of using AWS are: (Select TWO)",
                "answers": [
                    "A. Reduced Total Cost of Ownership (TCO).",
                    "B. Increased capital expenditure (capex).",
                    "C. Reduced operational expenditure ( opex ).",
                    "D. Deferred payment plans for startups."
                ],
                "solution": "A, C"
            },
            {
                "question": "Which AWS service can serve a static website?",
                "answers": [
                    "A. Amazon S3.",
                    "B. Amazon Route 53.",
                    "C. Amazon QuickSight.",
                    "D. AWS X-Ray."
                ],
                "solution": "A"
            },
            {
                "question": "What are the benefits of using the AWS Cloud for companies with customers in many countries around the world (Select TWO)",
                "answers": [
                    "A. Companies can deploy applications in multiple AWS Regions to reduce latency.",
                    "B. Amazon Translate automatically translates third-party website interfaces into multiple languages.",
                    "C. Amazon CloudFront has multiple edge locations around the world to reduce latency.",
                    "D. Amazon Comprehend allows users to build applications that can respond to user requests in many languages."
                ],
                "solution": "A, C"
            },
            {
                "question": "Which of the following are main components of the AWS global infrastructure? (Select TWO)",
                "answers": [
                    "A. Resource groups.",
                    "B. Availability Zones.",
                    "C. Security groups.",
                    "D. Regions."
                ],
                "solution": "B, D"
            },
            {
                "question": "What is the AWS customer responsible for according to the AWS shared responsibility model?",
                "answers": [
                    "A. Physical access controls.",
                    "B. Data encryption.",
                    "C. Secure disposal of storage devices.",
                    "D. Environmental risk management."
                ],
                "solution": "B"
            },
            {
                "question": "If each department within a company has its own AWS account, what is one way to enable consolidated billing?",
                "answers": [
                    "A. Use AWS Budgets on each account to pay only to budget.",
                    "B. Contact AWS Support for a monthly bill.",
                    "C. Create an AWS Organization from the payer account and invite the other accounts to join.",
                    "D. Put all invoices into one Amazon Simple Storage Service (Amazon S3) bucket, load data into Amazon Redshift, and then run a billing report."
                ],
                "solution": "C"
            },
            {
                "question": "What costs are included when comparing AWS Total Cost of Ownership (TCO) with on-premises TCO?",
                "answers": [
                    "A. Project management.",
                    "B. Antivirus software licensing.",
                    "C. Data center security.",
                    "D. Software development."
                ],
                "solution": "C"
            },
            {
                "question": "What is the benefit of using AWS managed services, such as Amazon ElastiCache and Amazon Relational Database Service (Amazon RDS)?",
                "answers": [
                    "A. They require the customer to monitor and replace failing instances.",
                    "B. They have better performance than customer-managed services.",
                    "C. They simplify patching and updating underlying OSs.",
                    "D. They do not require the customer to optimize instance type or size selections."
                ],
                "solution": "A, B"
            },
            {
                "question": "Which statement best describes Elastic Load Balancing?",
                "answers": [
                    "A. It translates a domain name into an IP address using DNC.",
                    "B. It distributes incoming application traffic across one or more Amazon EC2 instances.",
                    "C. It collects metrics on connected Amazon EC2 instances.",
                    "D. It automatically adjusts the number of Amazon EC2 instances to support incoming traffic."
                ],
                "solution": "B"
            },
            {
                "question": "Which of the following is a fast and reliable NoSQL database service?",
                "answers": [
                    "A. Amazon Redshift.",
                    "B. Amazon RDS.",
                    "C. Amazon DynamoDB.",
                    "D. Amazon S3."
                ],
                "solution": "C"
            },
            {
                "question": "Which AWS service would you use to obtain compliance reports and certificates?",
                "answers": [
                    "A. AWS Artifact.",
                    "B. AWS Lambda.",
                    "C. Amazon Inspector.",
                    "D. AWS Certificate Manager."
                ],
                "solution": "A"
            },
            {
                "question": "Which AWS services are defined as global instead of regional? (Select TWO)",
                "answers": [
                    "A. Amazon Route 53.",
                    "B. Amazon EC2.",
                    "C. Amazon S3.",
                    "D. Amazon CloudFront."
                ],
                "solution": "A, D"
            },
            {
                "question": "How would an AWS customer easily apply common access controls to a large set of users?",
                "answers": [
                    "A. Apply an IAM policy to an IAM group.",
                    "B. Apply an IAM policy to an IAM role.",
                    "C. Apply the same IAM policy to all IAM users with access to the same workload.",
                    "D. Apply an IAM policy to an Amazon Cognito user pool."
                ],
                "solution": "A"
            },
            {
                "question": "Which of the following is an important architectural design principle when designing cloud applications?",
                "answers": [
                    "A. Use multiple Availability Zones.",
                    "B. Use tightly coupled components.",
                    "C. Use open source software.",
                    "D. Provision extra capacity."
                ],
                "solution": "A"
            },
            {
                "question": "Which service allows a company with multiple AWS accounts to combine its usage to obtain volume discounts?",
                "answers": [
                    "A. AWS Server Migration Service.",
                    "B. AWS Organizations.",
                    "C. AWS Budgets.",
                    "D. AWS Trusted Advisor."
                ],
                "solution": "B"
            }
        ]
    },
    {
        "name": "Practice Exam 11",
        "questions": [
            {
                "question": "Which of the following can an AWS customer use to launch a new Amazon Relational Database Service (Amazon RDS) cluster? (Select TWO)",
                "answers": [
                    "A. AWS Concierge.",
                    "B. AWS CloudFormation.",
                    "C. Amazon Simple Storage Service (Amazon S3).",
                    "D. Amazon EC2 Auto Scaling.",
                    "E. AWS Management Console."
                ],
                "solution": "B, E"
            },
            {
                "question": "Which of the following Reserved Instance (RI) pricing models provides the highest average savings compared to On-Demand pricing?",
                "answers": [
                    "A. One-year, No Upfront, Standard RI pricing.",
                    "B. One-year, All Upfront, Convertible RI pricing.",
                    "C. Three-year, All Upfront, Standard RI pricing.",
                    "D. Three-year, No Upfront, Convertible RI pricing."
                ],
                "solution": "C"
            },
            {
                "question": "Which of the following are features of Amazon CloudWatch Logs? (Select TWO)",
                "answers": [
                    "A. Summaries by Amazon Simple Notification Service (Amazon SNS).",
                    "B. Free Amazon Elasticsearch Service analytics.",
                    "C. Provided at no charge.",
                    "D. Real-time monitoring.",
                    "E. Adjustable retention."
                ],
                "solution": "D, E"
            },
            {
                "question": "Which of the following is an AWS-managed compute service?",
                "answers": [
                    "A. Amazon SWF.",
                    "B. Amazon EC2.",
                    "C. AWS Lambda.",
                    "D. Amazon Aurora."
                ],
                "solution": "C"
            },
            {
                "question": "A company wants to reduce the physical compute footprint that developers use to run code. Which service would meet that need by enabling serverless architectures?",
                "answers": [
                    "A. Amazon Elastic Compute Cloud (Amazon EC2).",
                    "B. AWS Lambda.",
                    "C. Amazon DynamoDB.",
                    "D. AWS CodeCommit."
                ],
                "solution": "B"
            },
            {
                "question": "Which of the following is the customer's responsibility under the AWS shared responsibility model?",
                "answers": [
                    "A. Patching underlying infrastructure",
                    "B. Physical security",
                    "C. Patching Amazon EC2 instances",
                    "D. Patching network infrastructure"
                ],
                "solution": "C"
            },
            {
                "question": "According to the AWS shared responsibility model who is responsible for configuration management?",
                "answers": [
                    "A. It is solely the responsibility of the customer.",
                    "B. It is solely the responsibility of AWS.",
                    "C. It is shared between AWS and the customer.",
                    "D. It is not part of the AWS shared responsibility model."
                ],
                "solution": "C"
            },
            {
                "question": "Which security service automatically recognizes and classifies sensitive data or intellectual property on AWS?",
                "answers": [
                    "A. Amazon GuardDuty.",
                    "B. Amazon Macie.",
                    "C. Amazon Inspector.",
                    "D. AWS Shield."
                ],
                "solution": "B"
            },
            {
                "question": "Which of the following BEST describe the AWS pricing model? (Select TWO)",
                "answers": [
                    "A. Fixed-term.",
                    "B. Pay-as-you-go.",
                    "C. Colocation.",
                    "D. Planned.",
                    "E. Variable cost."
                ],
                "solution": "B, E"
            },
            {
                "question": "Under the shared responsibility model, which of the following tasks are the responsibility of the AWS customer? (Select TWO)",
                "answers": [
                    "A. Ensuring that application data is encrypted at rest.",
                    "B. Ensuring that AWS NTP servers are set to the correct time.",
                    "C. Ensuring that users have received security training in the use of AWS services.",
                    "D. Ensuring that access to data centers is restricted."
                ],
                "solution": "A, C"
            },
            {
                "question": "A customer is using multiple AWS accounts with separate billing. How can the customer take advantage of volume discounts with minimal impact to the AWS resources?",
                "answers": [
                    "A. Create one global AWS account and move all AWS resources to that account.",
                    "B. Sign up for three years of Reserved Instance pricing up front.",
                    "C. Use the consolidated billing feature from AWS Organizations.",
                    "D. Sign up for the AWS Enterprise support plan to get volume discounts."
                ],
                "solution": "C"
            },
            {
                "question": "Which Amazon EC2 pricing model offers the MOST significant discount when compared to OnDemand Instances?",
                "answers": [
                    "A. A Partial Upfront Reserved Instances for a 1-year term.",
                    "B. All Upfront Reserved instances for a 1 year form.",
                    "C. All Upfront Reserved Instances for a 3 year term.",
                    "D. No Upfront Reserved Instances for a 3 year term."
                ],
                "solution": "C"
            },
            {
                "question": "Which AWS services should be used for read/write of constantly changing data? (Select TWO)",
                "answers": [
                    "A. Amazon Glacier.",
                    "B. Amazon RDS.",
                    "C. AWS Snowball.",
                    "D. Amazon Redshift.",
                    "E. Amazon EFS."
                ],
                "solution": "B, E"
            },
            {
                "question": "Which AWS service allows users to identify the changes made to a resource over time?",
                "answers": [
                    "A. Amazon Inspector.",
                    "B. AWS Config.",
                    "C. AWS Service Catalog.",
                    "D. AWS IAM."
                ],
                "solution": "B"
            },
            {
                "question": "According to best practices, how should an application be designed to run in the AWS Cloud?",
                "answers": [
                    "A. Use tightly coupled components.",
                    "B. Use loosely coupled components.",
                    "C. Use infrequently coupled components.",
                    "D. Use frequently coupled components."
                ],
                "solution": "B"
            },
            {
                "question": "Which benefits are included with the AWS Business Support plan? (Select TWO)",
                "answers": [
                    "A. 24/7 assistance by way of live chat or a telephone call.",
                    "B. Support from a dedicated AWS Technical Account Manager.",
                    "C. An unlimited number of cases and contacts.",
                    "D. 15-minute response time for production system interruption cases."
                ],
                "solution": "A, C"
            },
            {
                "question": "Which of the following is an AWS managed Domain Name System (DNS) web service?",
                "answers": [
                    "A. Amazon Route 53.",
                    "B. Amazon Neptune.",
                    "C. Amazon SageMaker.",
                    "D. Amazon Lightsail."
                ],
                "solution": "A"
            },
            {
                "question": "A user must meet compliance and software licensing requirements that state a workload must be hosted on a physical server. When Amazon EC2 instance pricing option will meet these requirements?",
                "answers": [
                    "A. Dedicated Hosts.",
                    "B. Dedicated Instances.",
                    "C. Spot Instances.",
                    "D. Reserved Instances."
                ],
                "solution": "A"
            },
            {
                "question": "Which of the Reserved Instance (RI) pricing models can change the attributes of the RI as long as the exchange results in the creation of RIs of equal or greater value?",
                "answers": [
                    "A. Dedicated RIs.",
                    "B. Scheduled RIs.",
                    "C. Convertible RIs.",
                    "D. Standard RIs."
                ],
                "solution": "C"
            },
            {
                "question": "Which service is best for storing common database query results, which helps to alleviate database access load?",
                "answers": [
                    "A. Amazon Machine Learning.",
                    "B. Amazon SQS.",
                    "C. Amazon ElastiCache.",
                    "D. Amazon EC2 Instance Store."
                ],
                "solution": "C"
            },
            {
                "question": "When should a company consider using Amazon EC2 Spot Instances? (Select TWO)",
                "answers": [
                    "A. For non-production applications.",
                    "B. For stateful workloads.",
                    "C. For applications that cannot have interruptions.",
                    "D. For fault-tolerant flexible applications."
                ],
                "solution": "A, D"
            },
            {
                "question": "Which AWS tools assist with estimating costs? (Select three)",
                "answers": [
                    "A. Detailed billing report.",
                    "B. Cost allocation tags.",
                    "C. AWS Simple Monthly Calculator.",
                    "D. AWS Total Cost of Ownership (TCO) Calculator."
                ],
                "solution": "B, C, D"
            },
            {
                "question": "A company wants to focus on business activities instead of managing compute and capacity. Which AWS service can be used to automatically add or remove Amazon EC2 instances based on demand?",
                "answers": [
                    "A. Elastic Load Balancer.",
                    "B. Amazon EC2 Auto Scaling.",
                    "C. Amazon Route 53.",
                    "D. Amazon CloudFront."
                ],
                "solution": "B"
            },
            {
                "question": "Which is the minimum AWS Support plan that includes Infrastructure Event Management without additional costs?",
                "answers": [
                    "A. Enterprise.",
                    "B. Business.",
                    "C. Developer.",
                    "D. Basic."
                ],
                "solution": "A"
            },
            {
                "question": "Access keys in AWS Identity and Access Management (IM1) are used to:",
                "answers": [
                    "A. Log in to the AWS Management Console.",
                    "B. Make programmatic calls to AWS from AWS APIs.",
                    "C. Log in to Amazon EC2 instances.",
                    "D. Authenticate to AWS CodeCommit repositories."
                ],
                "solution": "B"
            },
            {
                "question": "Which AWS service can be used to query stored datasets directly from Amazon S3 using standard SQL?",
                "answers": [
                    "A. AWS Glue.",
                    "B. AWS Data Pipeline.",
                    "C. Amazon CloudSearch.",
                    "D. Amazon Athena."
                ],
                "solution": "D"
            },
            {
                "question": "How does AWS shorten the time to provision IT resources?",
                "answers": [
                    "A. It supplies an online IT ticketing platform for resource requests.",
                    "B. It supports automatic code validation services.",
                    "C. It provides the ability to programmatically provision existing resources.",
                    "D. It automates the resource request process from a company's IT vendor list."
                ],
                "solution": "C"
            },
            {
                "question": "Which AWS services can be used to gather information about AWS account activity? (Select TWO)",
                "answers": [
                    "A. Amazon CloudFront.",
                    "B. AWS Cloud9.",
                    "C. AWS CloudTrail.",
                    "D. AWS CloudHSM.",
                    "E. Amazon CloudWatch."
                ],
                "solution": "C, E"
            },
            {
                "question": "Which of the following are characteristics of Amazon S3? (Select TWO)",
                "answers": [
                    "A. A global file system.",
                    "B. An object store.",
                    "C. A local file store.",
                    "D. A network file system.",
                    "E. A durable storage system."
                ],
                "solution": "B, E"
            },
            {
                "question": "A user wants guidance on possible savings when migrating from on-premises to AWS. Which tool is suitable for this scenario?",
                "answers": [
                    "A. AWS Budgets.",
                    "B. Cost Explorer.",
                    "C. AWS Total Cost of Ownership (TCO) Calculator.",
                    "D. AWS Well-Architected Tool."
                ],
                "solution": "C"
            },
            {
                "question": "Which of the following services is in the category of AWS serverless platform?",
                "answers": [
                    "A. Amazon EMR.",
                    "B. Elastic Load Balancing.",
                    "C. AWS Lambda.",
                    "D. AWS Mobile Hub."
                ],
                "solution": "C"
            },
            {
                "question": "The use of what AWS feature or service allows companies to track and categorize spending on a detailed level?",
                "answers": [
                    "A. Cost allocation tags.",
                    "B. Consolidated billing.",
                    "C. AWS Budgets.",
                    "D. AWS Marketplace."
                ],
                "solution": "A"
            },
            {
                "question": "Which of the following inspects AWS environments to find opportunities that can save money for users and also improve system performance?",
                "answers": [
                    "A. AWS Cost Explorer.",
                    "B. AWS Trusted Advisor.",
                    "C. Consolidated billing.",
                    "D. Detailed billing."
                ],
                "solution": "B"
            },
            {
                "question": "Web servers running on Amazon EC2 access a legacy application running in a corporate data center. What term would describe this model?",
                "answers": [
                    "A. Cloud-native.",
                    "B. Partner network.",
                    "C. Hybrid architecture.",
                    "D. Infrastructure as a service."
                ],
                "solution": "C"
            },
            {
                "question": "What technology enables compute capacity to adjust as loads change?",
                "answers": [
                    "A. Load balancing.",
                    "B. Automatic failover.",
                    "C. Round robin.",
                    "D. Auto Scaling."
                ],
                "solution": "D"
            },
            {
                "question": "Which AWS service is a managed NoSQL database?",
                "answers": [
                    "A. Amazon Redshift.",
                    "B. Amazon DynamoDB.",
                    "C. Amazon Aurora.",
                    "D. Amazon RDS for ManaDB."
                ],
                "solution": "B"
            },
            {
                "question": "Which of the following is a correct relationship between regions, Availability Zones, and edge locations?",
                "answers": [
                    "A. Data centers contain regions.",
                    "B. Regions contain Availability Zones.",
                    "C. Availability Zones contain edge locations.",
                    "D. Edge locations contain regions."
                ],
                "solution": "B"
            },
            {
                "question": "What approach to transcoding a large number of individual video files adheres to AWS architecture principles?",
                "answers": [
                    "A. Using many instances in parallel.",
                    "B. Using a single large instance during off-peak hours.",
                    "C. Using dedicated hardware.",
                    "D. Using a large GPU instance type."
                ],
                "solution": "A"
            },
            {
                "question": "Which AWS services can host a Microsoft SQL Server database? (Select TWO)",
                "answers": [
                    "A. Amazon EC2.",
                    "B. Amazon Relational Database Service (Amazon RDS).",
                    "C. Amazon Aurora.",
                    "D. Amazon Redshift."
                ],
                "solution": "A, B"
            },
            {
                "question": "Which AWS IAM feature allows developers to access AWS services through the AWS CLI?",
                "answers": [
                    "A. API keys.",
                    "B. Access keys.",
                    "C. User names/Passwords.",
                    "D. SSH keys."
                ],
                "solution": "B"
            },
            {
                "question": "The user is fully responsible for which action when running workloads on AWS?",
                "answers": [
                    "A. Patching the infrastructure components.",
                    "B. Maintaining the underlying infrastructure components.",
                    "C. Maintaining physical and environmental controls.",
                    "D. Implementing controls to route application traffic."
                ],
                "solution": "D"
            },
            {
                "question": "Which AWS support plan includes a dedicated Technical Account Manager?",
                "answers": [
                    "A. Developer.",
                    "B. Enterprise.",
                    "C. Business.",
                    "D. Basic."
                ],
                "solution": "B"
            },
            {
                "question": "What time-savings advantage is offered with the use of Amazon Rekognition?",
                "answers": [
                    "A. Amazon Rekognition provides automatic watermarking of images.",
                    "B. Amazon Rekognition provides automatic detection of objects appearing in pictures.",
                    "C. Amazon Recognition provides the ability to resize millions of images automatically.",
                    "D. Amazon Rekognition uses Amazon Mechanical Turk to allow humans to bid on object detection jobs."
                ],
                "solution": "B"
            },
            {
                "question": "Which AWS service can be used to automatically scale an application up and down without making capacity planning decisions?",
                "answers": [
                    "A. Amazon EBS.",
                    "B. Amazon Redshift.",
                    "C. AWS CloudTrail.",
                    "D. AWS Lambda."
                ],
                "solution": "D"
            },
            {
                "question": "Amazon Relational Database Service (Amazon RDS) offers which of the following benefits over traditional database management?",
                "answers": [
                    "A. AWS manages the data stored in Amazon RDS tables.",
                    "B. AWS manages the maintenance of the operating system.",
                    "C. AWS automatically scales up instance types on demand.",
                    "D. AWS manages the database type."
                ],
                "solution": "B"
            },
            {
                "question": "A company's web application currently has light dependencies on underlying components so when one component fails the entire web application fails. Applying which AWS Cloud design principle will address the current design issue?",
                "answers": [
                    "A. Implementing elasticity enabling the application to scale up or scale down as demand changes.",
                    "B. Enabling several EC2 instances to run in parallel to achieve better performance.",
                    "C. Focusing on decoupling components by isolating them and ensuring individual components can function when other components.",
                    "D. Doubling EC2 computing resources to increase system fault tolerance."
                ],
                "solution": "C"
            },
            {
                "question": "A customer would like to design and build a new workload on AWS Cloud but does not have the AWS-related software technical expertise in-house. Which of the following AWS programs can a customer take advantage of to achieve that outcome?",
                "answers": [
                    "A. AWS Partner Network Technology Partners.",
                    "B. AWS Marketplace.",
                    "C. AWS Partner Network Consulting Partners.",
                    "D. AWS Service Catalog."
                ],
                "solution": "C"
            },
            {
                "question": "Which service stores objects, provides real-time access to those objects, and offers versioning and lifecycle capabilities?",
                "answers": [
                    "A. Amazon Glacier.",
                    "B. AWS Storage Gateway.",
                    "C. Amazon S3.",
                    "D. Amazon EBS."
                ],
                "solution": "C"
            },
            {
                "question": "Distributing workloads across multiple Availability Zones supports which cloud architecture design principle?",
                "answers": [
                    "A. Implement automation.",
                    "B. Design for agility.",
                    "C. Design for failure.",
                    "D. Implement elasticity."
                ],
                "solution": "C"
            },
            {
                "question": "Which service should a customer use to consolidate and centrally manage multiple AWS accounts?",
                "answers": [
                    "A. AWS IAM.",
                    "B. AWS Organizations.",
                    "C. AWS Schema Conversion Tool.",
                    "D. AWS Config."
                ],
                "solution": "B"
            }
        ]
    },
    {
        "name": "Practice Exam 12",
        "questions": [
            {
                "question": "How can a company reduce its Total Cost of Ownership (TCO) using AWS?",
                "answers": [
                    "A. By minimizing large capital expenditures.",
                    "B. By having no responsibility for third-party license costs.",
                    "C. By having no operational expenditures.",
                    "D. By having AWS manage applications."
                ],
                "solution": "A"
            },
            {
                "question": "Which options does AWS make available for customers who want to learn about security in the cloud in an instructor-led setting? (Select TWO)",
                "answers": [
                    "A. AWS Trusted Advisor.",
                    "B. AWS Online Tech Talks.",
                    "C. AWS Blog.",
                    "D. AWS Forums.",
                    "E. AWS Classroom Training."
                ],
                "solution": "B, E"
            },
            {
                "question": "Which of the following will enhance the security of access to the AWS Management Console'? (Select TWO)",
                "answers": [
                    "A. AWS Secrets Manager.",
                    "B. AWS Certificate Manager.",
                    "C. AWS Multi-Factor Authentication (AWS MFA).",
                    "D. Security groups.",
                    "E. Password policies."
                ],
                "solution": "C, E"
            },
            {
                "question": "Which of the following features can be configured through the Amazon Virtual Private Cloud (Amazon VPC) Dashboard? (Select TWO)",
                "answers": [
                    "A. Amazon CloudFront distributions.",
                    "B. Amazon Route 53.",
                    "C. Security Groups.",
                    "D. Subnets."
                ],
                "solution": "C, D"
            },
            {
                "question": "For which auditing process does AWS have sole responsibility?",
                "answers": [
                    "A. AWS IAM policies.",
                    "B. Physical security.",
                    "C. Amazon S3 bucket policies.",
                    "D. AWS CloudTrail Logs."
                ],
                "solution": "B"
            },
            {
                "question": "Which of the following are advantages of AWS consolidated billing? (Select TWO)",
                "answers": [
                    "A. The ability to receive one bill for multiple accounts.",
                    "B. Service limits increasing by default in all accounts.",
                    "C. A fixed discount on the monthly bill.",
                    "D. Potential volume discounts, as usage in all accounts is combined."
                ],
                "solution": "A, D"
            },
            {
                "question": "Which of the following common IT tasks can AWS cover to free up company IT resources? (Select TWO)",
                "answers": [
                    "A. Patching databases software.",
                    "B. Testing application releases.",
                    "C. Backing up databases.",
                    "D. Creating database schema."
                ],
                "solution": "A, C"
            },
            {
                "question": "A company wants to expand from one AWS Region into a second AWS Region. What does the company need to do to start supporting the new Region?",
                "answers": [
                    "A. Contact an AWS Account Manager to sign a new contract.",
                    "B. Move an Availability Zone to the new Region.",
                    "C. Begin deploying resources in the second Region.",
                    "D. Download the AWS Management Console for the new Region."
                ],
                "solution": "C"
            },
            {
                "question": "Why is it beneficial to use Elastic Load Balancers with applications?",
                "answers": [
                    "A. They allow for the conversion from Application Load.",
                    "B. Balancers to Classic Load Balancers.",
                    "C. They are capable of handling constant changes in network traffic patterns.",
                    "D. They automatically adjust capacity. They are provided at no charge to users."
                ],
                "solution": "C"
            },
            {
                "question": "Which is the MINIMUM AWS Support plan that allows for one-hour target response time for support cases?",
                "answers": [
                    "A. Enterprise.",
                    "B. Business.",
                    "C. Developer",
                    "D. Basic"
                ],
                "solution": "B"
            },
            {
                "question": "What is the lowest-cost, durable storage option for retaining database backups for immediate retrieval?",
                "answers": [
                    "A. Amazon S3.",
                    "B. Amazon Glacier.",
                    "C. Amazon EBS.",
                    "D. Amazon EC2 Instance Store."
                ],
                "solution": "A"
            },
            {
                "question": "What AWS team assists customers with accelerating cloud adoption through paid engagements in any of several specialty practice areas?",
                "answers": [
                    "A. AWS Enterprise Support.",
                    "B. AWS Solutions Architects.",
                    "C. AWS Professional Services.",
                    "D. AWS Account Managers."
                ],
                "solution": "C"
            },
            {
                "question": "A company needs 24/7 phone email and chat access with a response time of less than 1 hour if a production system has a service interruption Which AWS Support plan meets these requirements at the LOWEST cost?",
                "answers": [
                    "A. Basic.",
                    "B. Developer.",
                    "C. Business.",
                    "D. Enterprise."
                ],
                "solution": "C"
            },
            {
                "question": "If a customer needs to audit the change management of AWS resources, which of the following AWS services should the customer use?",
                "answers": [
                    "A. AWS Config.",
                    "B. AWS Trusted Advisor.",
                    "C. Amazon CloudWatch.",
                    "D. Amazon Inspector."
                ],
                "solution": "A"
            },
            {
                "question": "How does AWS Trusted Advisor provide guidance to users of the AWS Cloud? (Select TWO)",
                "answers": [
                    "A. It identifies software vulnerabilities in applications running on AWS.",
                    "B. It provides a list of cost optimization recommendations based on current AWS usage.",
                    "C. It detects potential security vulnerabilities caused by permissions settings on account resources.",
                    "D. It automatically corrects potential security issues caused by permissions settings on account resources."
                ],
                "solution": "B, C"
            },
            {
                "question": "Which AWS managed service is used to host databases?",
                "answers": [
                    "A. AWS Batch.",
                    "B. AWS Artifact.",
                    "C. AWS Data Pipeline.",
                    "D. Amazon RDS."
                ],
                "solution": "D"
            },
            {
                "question": "Which of the following Identity and Access Management (IAM) entities is associated with an access key ID and secret access key when using AWS Command Line Interface (AWS CLI)?",
                "answers": [
                    "A. IAM group.",
                    "B. IAM user.",
                    "C. IAM role.",
                    "D. IAM policy."
                ],
                "solution": "B"
            },
            {
                "question": "Under the shared responsibility model, which of the following is the customer responsible for?",
                "answers": [
                    "A. Ensuring that disk drives are wiped after use.",
                    "B. Ensuring that firmware is updated on hardware devices.",
                    "C. Ensuring that data is encrypted at rest.",
                    "D. Ensuring that network cables are category six or higher."
                ],
                "solution": "C"
            },
            {
                "question": "Which AWS service provides a simple and scalable shared file storage solution for use with Linux-based AWS and on-premises servers?",
                "answers": [
                    "A. Amazon S3.",
                    "B. Amazon Glacier.",
                    "C. Amazon EBS.",
                    "D. Amazon EFS."
                ],
                "solution": "D"
            },
            {
                "question": "What credential components are required to gain programmatic access to an AWS account? (Select TWO)",
                "answers": [
                    "A. An access key ID.",
                    "B. A primary key.",
                    "C. A secret access key.",
                    "D. A user ID."
                ],
                "solution": "A, C"
            },
            {
                "question": "Which of the following is a shared control between the customer and AWS?",
                "answers": [
                    "A. Providing a key for Amazon S3 client-side encryption.",
                    "B. Configuration of an Amazon EC2 instance.",
                    "C. Environmental controls of physical AWS data centers.",
                    "D. Awareness."
                ],
                "solution": "D"
            },
            {
                "question": "Which type of AWS storage is ephemeral and is deleted when an instance is stopped Of terminated?",
                "answers": [
                    "A. Amazon EBS.",
                    "B. Amazon EC2 instance store.",
                    "C. Amazon EFS.",
                    "D. Amazon S3."
                ],
                "solution": "B"
            },
            {
                "question": "Which of the following is an advantage of consolidated billing on AWS?",
                "answers": [
                    "A. Volume pricing qualification.",
                    "B. Shared access permissions.",
                    "C. Multiple bills per account.",
                    "D. Eliminates the need for tagging."
                ],
                "solution": "A"
            },
            {
                "question": "Which services are parts of the AWS serverless platform?",
                "answers": [
                    "A. Amazon EC2, Amazon S3, Amazon Athena.",
                    "B. Amazon Kinesis, Amazon SQS, Amazon EMR.",
                    "C. AWS Step Functions, Amazon DynamoDB, Amazon SNS.",
                    "D. Amazon Athena, Amazon Cognito, Amazon EC2."
                ],
                "solution": "C"
            },
            {
                "question": "Which of the following Amazon EC2 pricing models allow customers to use existing server-bound software licenses?",
                "answers": [
                    "A. Spot Instances.",
                    "B. Reserved Instances.",
                    "C. Dedicated Hosts.",
                    "D. On-Demand Instances."
                ],
                "solution": "C"
            },
            {
                "question": "Which of the following security measures protect access to an AWS account? (Select TWO)",
                "answers": [
                    "A. Enable AWS CloudTrail.",
                    "B. Grant least privilege access to IAM users.",
                    "C. Create one IAM user and share with many developers and users.",
                    "D. Enable Amazon CloudFront.",
                    "E. Activate multi-factor authentication (MFA) for privileged users."
                ],
                "solution": "B, E"
            },
            {
                "question": "Which AWS service provides the ability to manage infrastructure as code?",
                "answers": [
                    "A. AWS CodePipeline.",
                    "B. AWS CodeDeploy.",
                    "C. AWS Direct Connect.",
                    "D. AWS CloudFormation."
                ],
                "solution": "D"
            },
            {
                "question": "What is an advantage of deploying an application across multiple Availability Zones?",
                "answers": [
                    "A. There is a lower risk of service failure if a natural disaster causes a service disruption in a given AWS Region.",
                    "B. The application will have higher availability because it can withstand a service disruption in one Availability Zone.",
                    "C. There will be better coverage as Availability Zones are geographical^ distant and can serve a wider area.",
                    "D. There will be decreased application latency that will improve the user experience."
                ],
                "solution": "B"
            },
            {
                "question": "A customer needs to run a MySQL database that easily scales. Which AWS service should they use?",
                "answers": [
                    "A. Amazon Aurora.",
                    "B. Amazon Redshift.",
                    "C. Amazon DynamoDB.",
                    "D. Amazon ElastiCache."
                ],
                "solution": "A"
            },
            {
                "question": "Which of the following is an AWS Cloud architecture design principle?",
                "answers": [
                    "A. Implement single points of failure.",
                    "B. Implement loose coupling.",
                    "C. Implement monolithic design.",
                    "D. Implement vertical scaling."
                ],
                "solution": "B"
            },
            {
                "question": "AWS Enterprise Support users have access to which service or feature that is not available to users with other AWS Support plans?",
                "answers": [
                    "A. AWS Trusted Advisor.",
                    "B. AWS Support case.",
                    "C. Concierge team.",
                    "D. Amazon Connect."
                ],
                "solution": "C"
            },
            {
                "question": "A company will be moving from an on-premises data center to the AWS Cloud. What would be one financial difference after the move?",
                "answers": [
                    "A. Moving from variable operational expense ( opex ) to upfront capital expense (capex).",
                    "B. Moving from upfront capital expense (capex) to variable capital expense (capex).",
                    "C. Moving from upfront capital expense (capex) to variable operational expense ( opex ).",
                    "D. Elimination of upfront capital expense (capex) and elimination of variable operational expense ( opex )."
                ],
                "solution": "C"
            },
            {
                "question": "When performing a cost analysis that supports physical isolation of a customer workload, which compute hosting model should be accounted for in the Total Cost of Ownership (TCO)?",
                "answers": [
                    "A. Dedicated Hosts",
                    "B. Reserved Instances",
                    "C. On-Demand Instances",
                    "D. No Upfront Reserved Instances"
                ],
                "solution": "A"
            },
            {
                "question": "Which AWS service should be used for long-term, low-cost storage of data backups?",
                "answers": [
                    "A. Amazon RDS.",
                    "B. Amazon Glacier.",
                    "C. AWS Snowball.",
                    "D. AWS EBS."
                ],
                "solution": "B"
            },
            {
                "question": "Which is the MINIMUM AWS Support plan that provides technical support through phone calls?",
                "answers": [
                    "A. Enterprise.",
                    "B. Business.",
                    "C. Developer.",
                    "D. Basic."
                ],
                "solution": "B"
            },
            {
                "question": "Which Amazon EC2 instance pricing model can provide discounts of up to 90%?",
                "answers": [
                    "A. Reserved Instances.",
                    "B. On-Demand.",
                    "C. Dedicated Hosts.",
                    "D. Spot Instances."
                ],
                "solution": "D"
            },
            {
                "question": "Which of the following AWS services can be used to serve large amounts of online video content with the lowest possible latency? (Select TWO)",
                "answers": [
                    "A. appGateway.",
                    "B. Amazon S3.",
                    "C. Amazon Elastic File System (EFS).",
                    "D. Amazon Glacier.",
                    "E. Amazom CloudFront."
                ],
                "solution": "B, E"
            },
            {
                "question": "What can AWS edge locations be used for? (Select TWO)",
                "answers": [
                    "A. Hosting applications.",
                    "B. Delivering content closer to users.",
                    "C. Running NoSQL database caching services.",
                    "D. Reducing traffic on the server by caching responses."
                ],
                "solution": "B, D"
            },
            {
                "question": "A company is planning to migrate from on-premises to the AWS Cloud. When AWS tool or service provides detailed reports on estimated cost savings after migration?",
                "answers": [
                    "A. AWS Total Cost of Ownership (TCO) Calculator.",
                    "B. Cost Explorer.",
                    "C. AWS Budgets.",
                    "D. AWS Migration Hub."
                ],
                "solution": "A"
            },
            {
                "question": "Which AWS service provides a customized view of the health of specific AWS services that power a customer's workloads running on AWS?",
                "answers": [
                    "A. AWS Service Health Dashboard.",
                    "B. AWS X-Ray.",
                    "C. AWS Personal Health Dashboard.",
                    "D. Amazon CloudWatch."
                ],
                "solution": "C"
            },
            {
                "question": "One of the advantages to moving infrastructure from an on-premises data center to the AWS Cloud is:",
                "answers": [
                    "A. It allows the business to eliminate IT bills.",
                    "B. It allows the business to put a server in each customer's data center.",
                    "C. It allows the business to focus on business activities.",
                    "D. It allows the business to leave servers unpatched."
                ],
                "solution": "C"
            },
            {
                "question": "How can an AWS user with an AWS Basic Support plan obtain technical assistance from AWS?",
                "answers": [
                    "A. AWS Senior Support Engineers.",
                    "B. AWS Technical Account Managers.",
                    "C. AWS Trusted Advisor.",
                    "D. AWS Discussion Forums."
                ],
                "solution": "D"
            },
            {
                "question": "How can a user protect against AWS service disruptions if a natural disaster affects an entire geographic area?",
                "answers": [
                    "A. Deploy applications across multiple Availability Zones within an AWS Region.",
                    "B. Use a hybrid cloud computing deployment model within the geographic area.",
                    "C. Deploy applications across multiple AWS Regions.",
                    "D. Store application artifacts using AWS Artifact and replicate them across multiple AWS Regions."
                ],
                "solution": "C"
            },
            {
                "question": "Which activity is a customer responsibility in the AWS Cloud according to the AWS shared responsibility model?",
                "answers": [
                    "A. Ensuring network connectivity from AWS to the internet.",
                    "B. Patching and fixing flaws within the AWS Cloud infrastructure.",
                    "C. Ensuring the physical security of cloud data centers.",
                    "D. Ensuring Amazon EBS volumes are backed up."
                ],
                "solution": "D"
            },
            {
                "question": "In which scenario should Amazon EC2 Spot Instances be used?",
                "answers": [
                    "A. A company wants to move its main website to AWS from an on-premises web server.",
                    "B. A company has a number of application services whose Service Level Agreement (SLA) requires 99.999% uptime.",
                    "C. A company's heavily used legacy database is currently running on-premises.",
                    "D. A company has a number of infrequent, interruptible jobs that are currently using On-Demand Instances."
                ],
                "solution": "D"
            },
            {
                "question": "A customer is deploying a new application and needs to choose an AWS Region. Which of the following factors could influence the customer's decision? (Select TWO)",
                "answers": [
                    "A. Reduced latency to users.",
                    "B. The application's presentation in the local language.",
                    "C. Data sovereignty compliance.",
                    "D. Cooling costs in hotter climates."
                ],
                "solution": "A, C"
            },
            {
                "question": "Which AWS service provides alerts when an AWS event may impact a company's AWS resources?",
                "answers": [
                    "A. AWS Personal Health Dashboard.",
                    "B. AWS Service Health Dashboard.",
                    "C. AWS Trusted Advisor.",
                    "D. AWS Infrastructure Event Management."
                ],
                "solution": "A"
            },
            {
                "question": "Which disaster recovery scenario offers the lowest probability of down time?",
                "answers": [
                    "A. Backup and restore.",
                    "B. Pilot light.",
                    "C. Warm standby.",
                    "D. Multi-site active-active."
                ],
                "solution": "D"
            },
            {
                "question": "Which service's PRIMARY purpose is software version control?",
                "answers": [
                    "A. Amazon CodeStar.",
                    "B. AWS Command Line Interface (AWS CLI).",
                    "C. Amazon Cognito.",
                    "D. AWS CodeCommit."
                ],
                "solution": "D"
            },
            {
                "question": "How can a customer increase security to AWS account logons? (Select TWO)",
                "answers": [
                    "A. Configure AWS Certificate Manager",
                    "B. Enable Multi-Factor Authentication (MFA)",
                    "C. Use Amazon Cognito to manage access",
                    "D. Configure a strong password policy"
                ],
                "solution": "B, D"
            }
        ]
    },
    {
        "name": "Practice Exam 13",
        "questions": [
            {
                "question": "Which of the following components of the AWS Global Infrastructure consists of one or more discrete data centers interconnected through low latency links?",
                "answers": [
                    "A. Availability Zone",
                    "B. Edge location",
                    "C. Region",
                    "D. Private networking"
                ],
                "solution": "A"
            },
            {
                "question": "One benefit of On-Demand Amazon Elastic Compute Cloud (Amazon EC2) pricing is:",
                "answers": [
                    "A. The ability to bid for a lower hourly cost.",
                    "B. Paying a daily rate regardless of time used.",
                    "C. Paying only for time used.",
                    "D. Pre-paying for instances and paying a lower hourly rate."
                ],
                "solution": "C"
            },
            {
                "question": "What can assist in evaluating an application for migration to the cloud? (Select TWO)",
                "answers": [
                    "A. AWS Trusted Advisor.",
                    "B. AWS Professional Services.",
                    "C. AWS Systems Manager.",
                    "D. AWS Partner Network (APN)."
                ],
                "solution": "B, D"
            },
            {
                "question": "A characteristic of edge locations is that they:",
                "answers": [
                    "A. Host Amazon EC2 instances closer to users.",
                    "B. Help lower latency and improve performance for users.",
                    "C. Cache frequently changing data without reaching the origin server.",
                    "D. Refresh data changes daily."
                ],
                "solution": "B"
            },
            {
                "question": "Which of the following are valid ways for a customer to interact with AWS services? (Select TWO)",
                "answers": [
                    "A. Command line interface.",
                    "B. On-premises.",
                    "C. Software Development Kits.",
                    "D. Software-as-a-service."
                ],
                "solution": "A, C"
            },
            {
                "question": "What is a value proposition of the AWS Cloud?",
                "answers": [
                    "A. AWS is responsible for security in the AWS Cloud.",
                    "B. No long-term contract is required.",
                    "C. Provision new servers in days.",
                    "D. AWS manages user applications in the AWS Cloud."
                ],
                "solution": "B"
            },
            {
                "question": "A company is migrating an application that is running non-interruptible workloads for a three-year time frame. Which pricing construct would provide the MOST cost-effective solution?",
                "answers": [
                    "A. Amazon EC2 Spot Instances.",
                    "B. Amazon EC2 Dedicated Instances.",
                    "C. Amazon EC2 On-Demand Instances.",
                    "D. Amazon EC2 Reserved Instances."
                ],
                "solution": "D"
            },
            {
                "question": "Which AWS service is used to track record, and audit configuration changes made to AWS resources?",
                "answers": [
                    "A. AWS Shield.",
                    "B. AWS Config.",
                    "C. AWS IAM.",
                    "D. Amazon Inspector."
                ],
                "solution": "B"
            },
            {
                "question": "Which feature of the AWS Cloud will support an international company's requirement for low latency to all of its customers?",
                "answers": [
                    "A. Fault tolerance.",
                    "B. Global reach.",
                    "C. Pay-as-you-go pricing.",
                    "D. High availability."
                ],
                "solution": "B"
            },
            {
                "question": "How can one AWS account use Reserved Instances from another AWS account?",
                "answers": [
                    "A. By using Amazon EC2 Dedicated Instances.",
                    "B. By using AWS Organizations consolidated billing.",
                    "C. By using the AWS Cost Explorer tool.",
                    "D. By using AWS Budgets."
                ],
                "solution": "B"
            },
            {
                "question": "What are the benefits of developing and running a new application in the AWS Cloud compared to on-premises? (Select TWO)",
                "answers": [
                    "A. AWS automatically distributes the data globally for higher durability.",
                    "B. AWS will take care of operating the application.",
                    "C. AWS makes it easy to architect for high availability.",
                    "D. AWS can easily accommodate application demand changes."
                ],
                "solution": "C, D"
            },
            {
                "question": "Which of the following services falls under the responsibility of the customer to maintain operating system configuration, security patching, and networking?",
                "answers": [
                    "A. Amazon RDS.",
                    "B. Amazon EC2.",
                    "C. Amazon ElastiCache.",
                    "D. AWS Fargate."
                ],
                "solution": "B"
            },
            {
                "question": "AWS supports which of the following methods to add security to Identity and Access Management (IAM) users? (Select TWO)",
                "answers": [
                    "A. Implementing Amazon Rekognition.",
                    "B. Using AWS Shield-protected resources.",
                    "C. Blocking access with Security Groups.",
                    "D. Using Multi-Factor Authentication (MFA).",
                    "E. Enforcing password strength and expiration."
                ],
                "solution": "D, E"
            },
            {
                "question": "Which service provides a hybrid storage service that enables on-premises applications to seamlessly use cloud storage?",
                "answers": [
                    "A. Amazon Glacier",
                    "B. AWS Snowball",
                    "C. AWS Storage Gateway",
                    "D. Amazon Elastic Block Storage (Amazon EBS)"
                ],
                "solution": "C"
            },
            {
                "question": "Where should a company go to search software listings from independent software vendors to find, test, buy and deploy software that runs on AWS?",
                "answers": [
                    "A. AWS Marketplace.",
                    "B. Amazon Lumberyard.",
                    "C. AWS Artifact.",
                    "D. Amazon CloudSearch."
                ],
                "solution": "A"
            },
            {
                "question": "Which of the following is a component of the AWS Global Infrastructure?",
                "answers": [
                    "A. Amazon Alexa.",
                    "B. AWS Regions.",
                    "C. Amazon Lightsail.",
                    "D. AWS Organizations."
                ],
                "solution": "B"
            },
            {
                "question": "Which Amazon EC2 pricing model adjusts based on supply and demand of EC2 instances?",
                "answers": [
                    "A. On-Demand Instances.",
                    "B. Reserved Instances.",
                    "C. Spot Instances.",
                    "D. Convertible Reserved Instances."
                ],
                "solution": "C"
            },
            {
                "question": "A company wants to migrate its applications to a VPC on AWS These applications will need to access on-premises resources. What combination of actions will enable the company to accomplish this goals? (Select TWO)",
                "answers": [
                    "A. Use the AWS Service Catalog to identify a list of on-premises resources that can be migrated",
                    "B. Build a VPN connection between an on-premises device and a virtual private gateway in the new VPC",
                    "C. Use Amazon Athena to query data from the on-premises database servers",
                    "D. Connect the company's on-premises data center to AWS using AWS Direct Connect"
                ],
                "solution": "B, D"
            },
            {
                "question": "A Cloud Practitioner must determine if any security groups in an AW account have been provisioned to allow unrestricted access for specific ports What is the SIMPLEST way to do this?",
                "answers": [
                    "A. Review the inbound rules for each security group in the Amazon EC2 management console to check for port 0.0.0.0/0.",
                    "B. Run AWS Trusted Advisor and review the findings.",
                    "C. Open the AWS IAM console and check the inbound rule filters for open access.",
                    "D. In AWS Config, create a custom rule that invokes an AWS Lambda function to review firewall rules for inbound access."
                ],
                "solution": "B"
            },
            {
                "question": "Which of the following security-related services does AWS offer? (Select TWO)",
                "answers": [
                    "A. Multi-factor authentication physical tokens.",
                    "B. AWS Trusted Advisor security checks.",
                    "C. Data encryption.",
                    "D. Automated penetration testing."
                ],
                "solution": "B, C"
            },
            {
                "question": "Which of the following services have Distributed Denial of Service (DDoS) mitigation features? (Select TWO)",
                "answers": [
                    "A. AWS WAF.",
                    "B. Amazon DynamoDB.",
                    "C. Amazon EC2.",
                    "D. Amazon CloudFront."
                ],
                "solution": "A, D"
            },
            {
                "question": "Which of the following AWS features enables a user to launch a pre-configured Amazon Elastic Compute Cloud (Amazon EC2) instance?",
                "answers": [
                    "A. Amazon Elastic Block Store (Amazon EBS).",
                    "B. Amazon Machine Image.",
                    "C. Amazon EC2 Systems Manager.",
                    "D. Amazon AppStream 2.0."
                ],
                "solution": "B"
            },
            {
                "question": "A solution that is able to support growth in users, traffic, or data size with no drop in performance aligns with which cloud architecture principle?",
                "answers": [
                    "A. Think parallel.",
                    "B. Implement elasticity.",
                    "C. Decouple your components.",
                    "D. Design for failure."
                ],
                "solution": "B"
            },
            {
                "question": "Which AWS Cloud benefit eliminates the need for users to try estimating future infrastructure usage?",
                "answers": [
                    "A. Easy and fast deployment of applications in multiple Regions around the world.",
                    "B. Security of the AWS Cloud.",
                    "C. Elasticity of the AWS Cloud.",
                    "D. Lower variable costs due to massive economies of scale."
                ],
                "solution": "C"
            },
            {
                "question": "What can users access from AWS Artifact?",
                "answers": [
                    "A. AWS security and compliance documents.",
                    "B. A download of configuration management details for all AWS resources.",
                    "C. Training materials for AWS services.",
                    "D. A security assessment of the applications deployed in the AWS Cloud."
                ],
                "solution": "A"
            },
            {
                "question": "Compared with costs in traditional and virtualized data centers, AWS has:",
                "answers": [
                    "A. Greater variable costs and greater upfront costs.",
                    "B. Fixed usage costs and lower upfront costs.",
                    "C. Lower variable costs and greater upfront costs.",
                    "D. Lower variable costs and lower upfront costs."
                ],
                "solution": "D"
            },
            {
                "question": "Which AWS service would a customer use with a static website to achieve tower latency and high transfer speeds?",
                "answers": [
                    "A. AWS Lambda.",
                    "B. Amazon DynamoDB Accelerator.",
                    "C. Amazon Route 53.",
                    "D. Amazon CloudFront."
                ],
                "solution": "D"
            },
            {
                "question": "How do Amazon EC2 Auto Scaling groups help achieve high availability for a web application?",
                "answers": [
                    "A. They automatically add more instances across multiple AWS Regions based on global demand of the application.",
                    "B. They automatically add or replace instances across multiple Availability Zones when the application needs it.",
                    "C. They enable the application's stalk: content to reside closer to end users.",
                    "D. They are able to distribute incoming requests across a tier of web server instances."
                ],
                "solution": "B"
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
                "question": "How should a customer forecast the future costs for running a new web application?",
                "answers": [
                    "A. Amazon Aurora Backtrack.",
                    "B. Amazon CloudWatch Billing Alarms.",
                    "C. AWS Simple Monthly Calculator.",
                    "D. AWS Cost and Usage report."
                ],
                "solution": "C"
            },
            {
                "question": "Where are AWS compliance documents, such as an SOC 1 report, located?",
                "answers": [
                    "A. Amazon Inspector.",
                    "B. AWS CloudTrail.",
                    "C. AWS Artifact.",
                    "D. AWS Certificate Manager."
                ],
                "solution": "C"
            },
            {
                "question": "Which of the following tasks is the responsibility of AWS?",
                "answers": [
                    "A. Encrypting client-side data.",
                    "B. Configuring AWS Identity and Access Management (IAM) roles.",
                    "C. Securing the Amazon EC2 hypervisor.",
                    "D. Setting user password policies."
                ],
                "solution": "C"
            },
            {
                "question": "Under the shared responsibility model which of the following areas are the customer's responsibility? (Select TWO)",
                "answers": [
                    "A. Firmware upgrades of network infrastructure.",
                    "B. Patching of operating systems.",
                    "C. Patching of the underlying hypervisor.",
                    "D. Physical security of data centers.",
                    "E. Configuration of the security group."
                ],
                "solution": "B, E"
            },
            {
                "question": "A company is looking for a scalable data warehouse solution. Which of the following AWS solutions would meet the company's needs?",
                "answers": [
                    "A. Amazon Simple Storage Service (Amazon S3).",
                    "B. Amazon DynamoDB.",
                    "C. Amazon Kinesis.",
                    "D. Amazon Redshift."
                ],
                "solution": "D"
            },
            {
                "question": "Much AWS services provide a way to extend an on-premises architecture to the AWS Cloud? (Select TWO)",
                "answers": [
                    "A. Amazon EBS.",
                    "B. AWS Direct Connect.",
                    "C. Amazon CloudFront.",
                    "D. AWS Storage Gateway."
                ],
                "solution": "B, D"
            },
            {
                "question": "What are the advantages of the AWS Cloud (Select TWO)",
                "answers": [
                    "A. Fixed rate monthly cost.",
                    "B. No need to guess capacity requirements.",
                    "C. Increased speed to market.",
                    "D. Increased upfront capital expenditure."
                ],
                "solution": "B, C"
            },
            {
                "question": "How can the AWS Cloud increase user workforce productivity after migration from an on-premises data center?",
                "answers": [
                    "A. Users do not have to wait for infrastructure provisioning.",
                    "B. The AWS Cloud infrastructure is much faster than an on-premises data center infrastructure.",
                    "C. AWS takes over application configuration management on behalf of users.",
                    "D. Users do not need to address security and compliance issues."
                ],
                "solution": "A"
            },
            {
                "question": "Which of the following services could be used to deploy an application to servers running on-premises? (Select TWO)",
                "answers": [
                    "A. AWS Elastic Beanstalk.",
                    "B. AWS OpsWorks.",
                    "C. AWS CodeDeploy.",
                    "D. AWS Batch."
                ],
                "solution": "B, C"
            },
            {
                "question": "What is an example of agility in the AWS Cloud?",
                "answers": [
                    "A. Access to multiple instance types.",
                    "B. Access to managed services.",
                    "C. Using Consolidated Billing to produce one bill.",
                    "D. Decreased acquisition time for new compute resources."
                ],
                "solution": "D"
            },
            {
                "question": "Which AWS security service protects applications from distributed denial of service attacks with always-on detection and automatic inline mitigations?",
                "answers": [
                    "A. Amazon Inspector.",
                    "B. AWS Web Application Firewall (AWS WAF).",
                    "C. Elastic Load Balancing (ELB).",
                    "D. AWS Shield."
                ],
                "solution": "D"
            },
            {
                "question": "Which of the following are advantages of AWS consolidated billing? (Choose two)",
                "answers": [
                    "A. The ability to receive one bill for multiple accounts.",
                    "B. Service limits increasing by default in all accounts.",
                    "C. A fixed discount on the monthly bill.",
                    "D. Potential volume discounts, as usage in all accounts is combined."
                ],
                "solution": "A, D"
            },
            {
                "question": "A company is considering using AWS for a self-hosted database that requires a nightly shutdown for maintenance and cost-saving purposes. Which service should the company use?",
                "answers": [
                    "A. Amazon Redshift.",
                    "B. Amazon DynamoDB.",
                    "C. Amazon Elastic Compute Cloud (Amazon EC2) with Amazon EC2 instance store.",
                    "D. Amazon EC2 with Amazon Elastic Block Store (Amazon EBS)."
                ],
                "solution": "D"
            }
        ]
    },

]
