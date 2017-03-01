module.exports = {

  kmsEncryptedHookUrl: "AQECAHhwcedt+Ypm3XTRLHX50Ff/O//tL5grxnR+u6QdfxLtkwAAAKcwgaQGCSqGSIb3DQEHBqCBljCBkwIBADCBjQYJKoZIhvcNAQcBMB4GCWCGSAFlAwQBLjARBAyA1qJd1LBXPC7PmaMCARCAYJgzv/PlduW6t4ZTD4Xlz1L+9KVIk/A/Ynd8VDFdyAovhnW2g9V+JU/kQxECZ+sJkN28iws3o9FEt6nEf99R89WN5I85+PfugUFzN+yEwYgGNgzAPG8vjtINRtJg57NKxA==", // encrypted slack webhook url
  // unencryptedHookUrl: "<unencryptedHookUrl>", // unencrypted slack webhook url
  // slackChannel: "#cloudwatch-alarm",  // slack channel to send a message to
  slackUsername: "AWS SNS via Lamda", // slack username to user for messages
  icon_emoji: ":robot_face:", // slack emoji icon to use for messages
  orgIcon: "https://readyfor.jp/assets/favicon/favicon-ace201e716de8bc639115e7c00db7b2e3f2681b56c3c391601a6173d4e4cd752.png", // url to icon for your organization for display in the footer of messages
  orgName: "Readyfor", // name of your organization for display in the footer of messages
  services: {
    elasticbeanstalk: {
      match_text: "ElasticBeanstalkNotifications" // text in the sns message or topicname to match on to process this service type
    },
    cloudwatch: {
      match_text: "CloudWatchNotifications" // text in the sns message or topicname to match on to process this service type
    },
    codedeploy: {
      match_text: "CodeDeploy" // text in the sns message or topicname to match on to process this service type
    },
    elasticache: {
      match_text: "ElastiCache" // text in the sns message or topicname to match on to process this service type
    },
    autoscaling: {
      match_text: "AutoScaling" // text in the sns message or topicname to match on to process this service type
    }
  }

}
