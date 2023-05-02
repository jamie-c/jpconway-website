// The purpose of this file is to hold post info for use in the ../pages/posts.html page

const postsInfo = [
    {
        title: "Community Detection Comparisons",
        fileName: "2023-05-02-community-detection-comparison.html",
        datePosted: "May 02",
        monthPosted: 05,
        yearPosted: 2023,
        dateCode: 20230502,
        postContent: `<h2>To run community detection on a graph database implemented in neo4j using the Graph Data Science (GDS) plugin, follow these steps:</h2>
        <p>Install the GDS plugin: You can install the GDS plugin by following the instructions in the <a rel="noopener noreferrer" target="_blank" href="https://neo4j.com/docs/graph-data-science/current/installation/">neo4j documentation</a>.</p>
        <p>Load your graph into neo4j: Load your graph into neo4j using the Cypher query language.</p>
        <p>Create a graph projection: Create a graph projection to perform <a rel="noopener noreferrer" target="_blank" href="https://neo4j.com/docs/graph-data-science/current/algorithms/community/">community detection</a> on a subset of the graph or to simplify the graph structure.</p>
        <p>Run community detection using the GDS plugin: Use the GDS plugin to run community detection on the graph projection. You can choose from several community detection algorithms such as Louvain, Label Propagation, and Triangle Count.</p>
        <p>Evaluate the results: Evaluate the results of the community detection algorithm using metrics such as modularity, coverage, and density.</p>
        <h2>To compare the results of running community detection on the graph database using the GDS plugin and running community detection externally using the python package NetworkX, follow these steps:</h2>
        <p>Export the graph from neo4j: Export the graph from neo4j in a format that can be read by <a rel="noopener noreferrer" target="_blank" href="https://networkx.org/documentation/stable/tutorial.html">NetworkX</a>, such as GraphML or GEXF.</p>
        <p>Import the graph into NetworkX: Import the graph into NetworkX using one of the built-in graph reading functions.</p>
        <p>Run community detection using NetworkX: Use one of the built-in <a rel="noopener noreferrer" target="_blank" href="https://networkx.org/documentation/stable/reference/algorithms/community.html">community detection algorithms in NetworkX</a>, such as Louvain or Label Propagation, to detect communities in the graph.</p>
        <p>Evaluate the results: Evaluate the results of the community detection algorithm using the same metrics as in the GDS plugin approach.</p>
        <p>Compare the results: Compare the results of the two approaches based on the evaluation metrics. If the results are similar, you can conclude that both approaches are valid. If the results are different, you may need to investigate further to understand the reasons for the differences.`
    },
    {
        title: "Triplestores",
        fileName: "2023-04-12-triplestores.html",
        datePosted: "April 12",
        monthPosted: 04,
        yearPosted: 2023,
        dateCode: 20230412,
        postContent: `<p>Triplestores and semantic queries have become increasingly important tools for data scientists in recent years. With the explosion of data available, organizations and individuals need powerful ways to manage, analyze and make sense of the data they have. In this post, we will explore what triplestores and semantic queries are, how they work, and the power they can bring to data science.</p>
        <h3>What are Triplestores?</h3>
        <p>Triplestores are a type of database that stores information in the form of subject-predicate-object triples, also known as RDF (Resource Description Framework) triples. These triples are used to represent information in a way that is machine-readable and allows for powerful querying and analysis. Each triple consists of a subject, which represents the entity being described, a predicate, which represents the property or attribute of the entity, and an object, which represents the value of that property.</p>
        <p>For example, consider the triple "John is married to Jane". Here, "John" is the subject, "is married to" is the predicate, and "Jane" is the object. This triple represents a relationship between two entities and can be stored in a triplestore for later analysis.</p>
        <h3>How do Semantic Queries work?</h3>
        <p>Semantic queries are a way to query a triplestore using a language called SPARQL (SPARQL Protocol and RDF Query Language). SPARQL allows users to write queries that ask specific questions about the data stored in the triplestore. These queries can be simple, such as finding all triples that contain a specific value, or complex, such as finding all entities related to a given entity through a specific predicate.</p>  
        <p>For example, a simple SPARQL query might look like this:</p>
        <pre class="codeblock">
            <code class="code">
                SELECT ?s ?p ?o <br />
                WHERE { ?s ?p ?o . <br />
                FILTER(?o = "Jane") }
            </code>
        </pre>
        <p>This query will find all triples in the triplestore where the object is "Jane". The resulting output will be a table with three columns: the subject, predicate, and object of each triple that matches the query.</p>
        <h3>The Power of Triplestores and Semantic Queries for Data Science</h3>
        <p>Triplestores and semantic queries are powerful tools for data scientists because they allow for complex data analysis and integration of data from multiple sources. By representing data as RDF triples, triplestores can easily combine data from different sources, even if they use different data models or formats. This can be especially useful in situations where data needs to be integrated from multiple systems, such as in healthcare or finance.</p>
        <p>Semantic queries also allow for powerful analysis of data, such as finding relationships between entities, clustering entities based on shared properties, and identifying patterns in the data. These queries can be used to build machine learning models, create visualizations, and make predictions based on the data.</p>
        <p>In addition, triplestores and semantic queries can be used to create knowledge graphs, which are visual representations of the relationships between entities in the data. Knowledge graphs can be used to gain insights into complex systems, such as social networks or financial markets, and can help identify new opportunities or areas for improvement.</p>
        <h3>Conclusion</h3>
        <p>Triplestores and semantic queries are powerful tools for data scientists that allow for complex data analysis, integration of data from multiple sources, and creation of knowledge graphs. By representing data as RDF triples and querying them with SPARQL, data scientists can gain insights into complex systems and make predictions based on the data. As data continues to grow and become more complex, triplestores and semantic queries will become even more important tools for managing and analyzing data.</p>`
    }, 
    {
        title: "Hello World!",
        fileName: "2023-03-22-hello-world.html",
        datePosted: "March 22",
        monthPosted: 03,
        yearPosted: 2023,
        dateCode: 20230322,
        postContent: `<p>Hi! I'm Jamie and I'm excited to share my first  post with you!</p>
        <p>Over the past few weeks, I've been coding my own website by hand, and I've finally published it to the world.</p>
        <p>I decided to code my website by hand because I wanted to challenge myself and improve my web development skills. I've implemented what I've learned through OKCoders, which, to date we've only covered html and css!</p>
        <p>Although it was a steep learning curve, I'm really proud of what I've created and I hope you enjoy checking it out.</p>
        <p>My website is all about the tools and technologies I have learned so I can get hired.</p>
        <p>If you're interested in coding your own website by hand, I'd love to share some of the resources and tools that helped me along the way. And if you have any feedback or suggestions for how I can improve my site, I'm all ears!</p>
        <p>Thanks for taking the time to read this!</p>`
    },
    {
        title: "Run a Python Script In Vim",
        fileName: "2023-04-02-python-in-vim.html",
        datePosted: "April 02",
        monthPosted: 04,
        yearPosted: 2023,
        dateCode: 20230402,
        postContent: `<p>Sometimes its useful, when editing a python script in vim, to quickly runn the script to test the output. There are a million reasons to run a python script in vim, and it's easy to do it with the press of a key.</p>
        <p>Here's the code to configure vim to run a python file that is in the current buffer with the press of the <kbd>F5</kbd> key.</p>
        <pre class="codeblock">
        <code class="code">
          &quot; Map the F5 key to run a Python script inside Vim.<br>
          &quot; We map F5 to a chain of commands here.<br>
          &quot; :w saves the file.<br>
          &quot; &lt;CR&gt; (carriage return) is like pressing the enter key.<br>
          &quot; !clear runs the external clear screen command.<br>
          &quot; !python3 % executes the current file with Python.<br>
          nnoremap &lt;f5&gt; :w &lt;CR&gt;:!clear &lt;CR&gt;:!python3 % &lt;CR&gt;<br>
        </code> 
        </pre>
        <p>If you add the above code to your .vimrc file, which should be located at ~/.vimrc, and have a phython script open, pressing <kbd>F5</kbd> will save your file, clear the screen, and display the results of the python output. Getting back to your file is as simple as pressing Enter.</p>`
    }
];
