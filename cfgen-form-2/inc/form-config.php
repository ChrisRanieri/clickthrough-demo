<?php
$cfg['debug'] = false;

// This is the email address where you will receive the notification message
$cfg['email_address'] = 'info@hawaiiuavservice.com';

$cfg['email_from'] = '';

// The recipients in CC and BCC will receive a copy of the data collected in the form
// Use commas to separate mutiple e-mail addresses (no spaces allowed)
// Example: youraddress1@yourdomain.com,youraddress2@yourdomain.com
$cfg['email_address_cc'] = '';

$cfg['email_address_bcc'] = '';

$cfg['emailsendingmethod'] = 'php';

$cfg['smtp_host'] = '';

$cfg['smtp_port'] = '';

$cfg['smtp_encryption'] = '';

$cfg['smtp_username'] = '';

$cfg['smtp_password'] = '';

$cfg['timezone'] = 'UTC';

$cfg['form_id'] = '2';

$cfg['form_name'] = 'Contact Form';

$cfg['form_validationmessage'] = '';

$cfg['form_errormessage_captcha'] = '';

$cfg['form_errormessage_emptyfield'] = 'This field cannot be left blank';

$cfg['form_errormessage_invalidemailaddress'] = 'Invalid email address';

$cfg['form_errormessage_invalidurl'] = '';

$cfg['form_errormessage_terms'] = '';

$cfg['form_redirecturl'] = 'https://www.hawaiiuavservice.com/thank-you.php';

$cfg['adminnotification_subject'] = 'New message sent from your website: From: {Name|6}';

$cfg['adminnotification_hideemptyvalues'] = false;

$cfg['adminnotification_hideformurl'] = true;

$cfg['usernotification_inputid'] = 'cfgen-element-2-3';

$cfg['usernotification_activate'] = true;

$cfg['usernotification_insertformdata'] = false;

$cfg['usernotification_format'] = 'plaintext';

$cfg['usernotification_subject'] = 'Thank you for your message, {Name|8}';

$cfg['usernotification_message'] = 'Thank you for contacting us.
We will answer you as soon as possible.';

$cfg['usernotification_hideemptyvalues'] = false;

$cfg['formvalidation_required'] = array('cfgen-element-2-3');

$cfg['formvalidation_email'] = array('cfgen-element-2-3');

// MailChimp
$cfg['mailchimp']['apikey'] = 'bce58b4202c8d9a4ba686637bdc6d9fe-us16';

$cfg['mailchimp']['lists'][0]['list_id'] = '0d5cc64259';

$cfg['mailchimp']['lists'][0]['doubleoptin'] = true;

$cfg['mailchimp']['lists'][0]['updateexistingcontact'] = true;

$cfg['mailchimp']['lists'][0]['sendwelcomeemail'] = false;

$cfg['mailchimp']['lists'][0]['fields'][] = array('list_field_id' => 'EMAIL', 'element_id' => 'cfgen-element-2-3');

$cfg['mailchimp']['lists'][0]['fields'][] = array('list_field_id' => 'FNAME', 'element_id' => 'cfgen-element-2-6');

$cfg['mailchimp']['lists'][0]['fields'][] = array('list_field_id' => 'MMERGE5', 'element_id' => 'cfgen-element-2-7');

$cfg['mailchimp']['lists'][0]['fields_by_id']['EMAIL'] = 'cfgen-element-2-3';

$cfg['mailchimp']['lists'][0]['fields_by_id']['FNAME'] = 'cfgen-element-2-6';

$cfg['mailchimp']['lists'][0]['fields_by_id']['MMERGE5'] = 'cfgen-element-2-7';

?>