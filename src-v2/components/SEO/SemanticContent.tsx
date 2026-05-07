export default function SemanticContent() {
  return (
    <section className="sr-only" aria-hidden="true">
      <h1>Jorge Delgadillo - Software Engineer</h1>
      
      <article>
        <h2>About</h2>
        <p>
          I'm a versatile and detail-oriented Fullstack Software Engineer with 
          over 5 years of experience in startups and international environments. 
          My journey spans from building critical payments infrastructure to 
          developing cross-platform mobile applications that serve thousands of users.
        </p>
        <p>
          My expertise lies in creating scalable backend systems, designing seamless 
          user experiences, and managing cloud infrastructure. I have a track record 
          of leading greenfield projects, implementing automation solutions, and 
          integrating complex payment systems like Stripe and Hyperwallet.
        </p>
        <p>
          Recently, in my Freelance work, I've implemented subscription flows and 
          webhook security with Stripe, built custom AI agents using LangChain, and 
          designed automation pipelines in n8n integrating LLMs, vector databases, 
          and external APIs.
        </p>
      </article>
      
      <article>
        <h2>Experience</h2>
        
        <section>
          <h3>Software Engineer at Freelance</h3>
          <p>Jun 2025 – Present | Querétaro, Mexico (Remote)</p>
          <p>
            Freelance work implementing payment infrastructures, building AI agents, 
            and modernizing client applications and services.
          </p>
          <ul>
            <li>Implemented payment infrastructures with Stripe, including subscription flows, webhook security, and multi-platform integration for SaaS and ecommerce clients.</li>
            <li>Built custom AI agents with LangChain to automate data processing, knowledge retrieval, and workflow orchestration for internal operations.</li>
            <li>Designed AI automation pipelines in n8n, integrating LLMs, vector databases, and external APIs to reduce manual work for clients.</li>
            <li>Performed code refactors, including migrating entire projects from JavaScript to TypeScript, improving type safety, maintainability, and reliability.</li>
            <li>Upgraded legacy frontend apps by updating React versions, resolving breaking changes, improving performance, and modernizing tooling.</li>
            <li>Developed and extended REST APIs and microservices in Python.</li>
          </ul>
        </section>

        <section>
          <h3>Software Engineer at Instawork</h3>
          <p>Dec 2021 – May 2025 | San Francisco, CA (Remote from Mexico)</p>
          <p>
            Maintained and supported critical Payments infrastructure using Python 
            (Stripe, Hyperwallet). Built native Android and iOS components and 
            integrated with React Native.
          </p>
          <ul>
            <li>Maintained critical Payments infrastructure using Python (Stripe, Hyperwallet)</li>
            <li>Implemented banking services module including transactions, 2FA, and card support</li>
            <li>Built native Android and iOS components (Kotlin/Swift) integrated with React Native</li>
            <li>Designed custom AI agents with LangChain for internal automation</li>
            <li>Led greenfield projects, refactors, and module removals</li>
            <li>Built end-to-end testing flows with Appium and Browserstack</li>
          </ul>
        </section>

        <section>
          <h3>Fullstack Developer at Stateoftheart.ai</h3>
          <p>Aug 2020 – Nov 2021 | Querétaro, Mexico</p>
          <p>
            Developed fullstack features for web applications using React. 
            Maintained Dockerized services and basic AWS infrastructure.
          </p>
          <ul>
            <li>Developed fullstack features for web applications using React</li>
            <li>Maintained Dockerized services and basic AWS infrastructure</li>
            <li>Contributed across frontend/backend layers for fast-paced deployments</li>
          </ul>
        </section>

        <section>
          <h3>Software Developer at Corebooks</h3>
          <p>Jan 2019 – Jun 2020 | Celaya, Mexico</p>
          <p>
            Built cross-platform mobile point-of-sale system with React Native 
            for mobile and React for web. Integrated Stripe payments and created 
            ERP modules in Odoo.
          </p>
          <ul>
            <li>Built cross-platform mobile point-of-sale system with React Native</li>
            <li>Developed web version using React</li>
            <li>Integrated Stripe payments for transaction processing</li>
            <li>Created ERP modules in Odoo using Python</li>
          </ul>
        </section>
      </article>
      
      <article>
        <h2>Projects</h2>
        
        <section>
          <h3>JD Portfolio</h3>
          <p>
            This website! Built to showcase my skills, experience, and projects. 
            Designed with a modern UI and responsive layout.
          </p>
          <p>Technologies: React, TypeScript, Vite, Tailwind CSS, SCSS</p>
          <p>Link: https://github.com/JorgeDelgadillo/jd-portfolio</p>
        </section>

        <section>
          <h3>LazyWhats</h3>
          <p>
            A WhatsApp Terminal User Interface (TUI) client with Vim-style 
            keybindings. Features QR code authentication, real-time messaging, 
            and smart notifications—all from your terminal.
          </p>
          <p>Technologies: TypeScript, Node.js, Docker, Blessed</p>
          <p>Link: https://github.com/JorgeDelgadillo/lazywhats</p>
        </section>
      </article>
      
      <article>
        <h2>Skills</h2>
        <ul>
          <li>Languages: Python, TypeScript, JavaScript, Kotlin, Swift</li>
          <li>Frameworks: React, React Native, Django</li>
          <li>DevOps & Tools: Docker, AWS (EC2, S3, KMS), Datadog, Sentry, Kubernetes</li>
          <li>Databases & Testing: PostgreSQL, MongoDB, Jest, Pytest, Appium</li>
          <li>Other Technologies: Stripe, Hyperwallet, LangChain, GraphQL, Browserstack, n8n</li>
        </ul>
      </article>

      <article>
        <h2>Contact</h2>
        <p>Email: jorgdelgadillo@gmail.com</p>
        <p>Location: Querétaro, Mexico</p>
        <p>Calendly: https://calendly.com/jorgdelgadillo/30min</p>
      </article>

      <article>
        <h2>Social Media</h2>
        <ul>
          <li>GitHub: https://github.com/JorgeDelgadillo</li>
          <li>LinkedIn: https://www.linkedin.com/in/jorge-delgadillo/</li>
          <li>Twitter: https://x.com/KrJorgeD</li>
        </ul>
      </article>
    </section>
  )
}
