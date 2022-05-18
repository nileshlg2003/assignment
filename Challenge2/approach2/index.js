'use strict';

function main() {
  // [START gcpmetadata_quickstart]
  const gcpMetadata = require('gcp-metadata');

  async function index() {
    // check to see if this code can access a metadata server
    const isAvailable = await gcpMetadata.isAvailable();
    console.log(`Is available: ${isAvailable}`);

    // Instance and Project level metadata will only be available if
    // running inside of a Google Cloud compute environment such as
    // Cloud Functions, App Engine, Kubernetes Engine, or Compute Engine.
    // To learn more about the differences between instance and project
    // level metadata, see:
    // https://cloud.google.com/compute/docs/storing-retrieving-metadata#project-instance-metadata
    if (isAvailable) {
      // grab all top level metadata from the service
      const instanceMetadata = await gcpMetadata.instance();
      console.log('Instance metadata:');
      //console.log(instanceMetadata);
      console.log(JSON.stringify(instanceMetadata))

      // get all project level metadata
      const projectMetadata = await gcpMetadata.project();
      console.log('Project metadata:');
      console.log(projectMetadata);
      //console.log(JSON.stringify(projectMetadata))

      const hostname = await gcpMetadata.instance('hostname');
      console.log("specific object - Hostname")
        console.log(hostname); // ...Instance hostname



      const data = await gcpMetadata.instance({
        property: 'tags',
        params: { alt: 'text' }
      });
      console.log('Specific metadata:');
      console.log( data) // ...Tags as newline-delimited list
      //console.log(JSON.stringify(data))
      
    }
  }

  

  index();
  // [END gcpmetadata_quickstart]
}

main();