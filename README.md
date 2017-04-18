# Orphan Kitten Project Website

This project was created for the non-profit group, Orphan Kitten Project of University of California-Davis.  It's primary functionality is to serve as resource for information about the organization, including links to his social media pages, a listing of current members and contact forms for non-emergency questions or for becoming a foster for the organization

## jQuery Facebook feed on home page

The home page populates with the most recent facebook posts.  These are done using a Facebook graph API request, and the number of images is easily adjustable in the JavaScript file.  API request grabs the first six images from the org's timeline photos, but could be adapted for any album ID.  The caption from the post is then turned into the caption for the feed photo.  If none is provided, a simple 🐱 emoji is substituted.

## Image hosting

Images are all hosted with AWS S3 in a project-specific bucket.

### misc

Form submission is done through Formspree with some customized properties, like specific reply-tos and a confirmation page (messagesent.html).  HTML and CSS is based off a pixelarity template, but heavily adapted for the organization's use. Kitten in the banner photo is also a very good kitten.
