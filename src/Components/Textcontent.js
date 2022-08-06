import React from "react";

export const Textcontent = () => {
  return (
    <div className="w-full px-4 md:px-6 text-xl text-grey-darkest leading-normal">
      <div className="font-sans">
        <div id="layout-1">
          <h1 contentEditable>angel in the offside</h1>
        </div>
        <p className="text-sm md:text-base font-normal text-grey-dark">
          Published 29 February 2019
        </p>
      </div>

      <p className="py-6">
        👋 Welcome fellow{" "}
        <a
          className="text-teal no-underline hover:underline"
          href="https://www.tailwindcss.com"
        >
          Tailwind CSS
        </a>{" "}
        and miminal monochrome blog fan. This starter template provides a
        starting point to create your own minimal monochrome blog using Tailwind
        CSS and vanilla Javascript.
      </p>

      <p className="py-6">
        The basic blog page layout is available and all using the default
        Tailwind CSS classNamees (although there are a few hardcoded style
        tags). If you are going to use this in your project, you will want to
        convert the classNamees into components.
      </p>

      <h1 className="py-2 font-sans">Vatrogasci gase, piromani pale</h1>
      <h2 className="py-2 font-sans">Heading 2</h2>
      <h3 className="py-2 font-sans">Heading 3</h3>
      <h4 className="py-2 font-sans">Heading 4</h4>
      <h5 className="py-2 font-sans">Heading 5</h5>
      <h6 className="py-2 font-sans">Heading 6</h6>

      <p className="py-6">
        Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt lacus
        purus, in mattis tortor sollicitudin pretium. Phasellus at diam posuere,
        scelerisque nisl sit amet, tincidunt urna. Cras nisi diam, pulvinar ut
        molestie eget, eleifend ac magna. Sed at lorem condimentum, dignissim
        lorem eu, blandit massa. Phasellus eleifend turpis vel erat bibendum
        scelerisque. Maecenas id risus dictum, rhoncus odio vitae, maximus
        purus. Etiam efficitur dolor in dolor molestie ornare. Aenean pulvinar
        diam nec neque tincidunt, vitae molestie quam fermentum. Donec ac
        pretium diam. Suspendisse sed odio risus. Nunc nec luctus nisi.
        className aptent taciti sociosqu ad litora torquent per conubia nostra,
        per inceptos himenaeos. Duis nec nulla eget sem dictum elementum.
      </p>

      <ol>
        <li className="py-3">
          Maecenas accumsan lacus sit amet elementum porta. Aliquam eu libero
          lectus. Fusce vehicula dictum mi. In non dolor at sem ullamcorper
          venenatis ut sed dui. Ut ut est quam. Suspendisse quam quam, commodo
          sit amet placerat in, interdum a ipsum. Morbi sit amet tellus
          scelerisque tortor semper posuere.
        </li>
        <li className="py-3">
          Morbi varius posuere blandit. Praesent gravida bibendum neque eget
          commodo. Duis auctor ornare mauris, eu accumsan odio viverra in. Proin
          sagittis maximus pharetra. Nullam lorem mauris, faucibus ut odio
          tempus, ultrices aliquet ex. Nam id quam eget ipsum luctus hendrerit.
          Ut eros magna, eleifend ac ornare vulputate, pretium nec felis.
        </li>
        <li className="py-3">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Nunc vitae pretium elit. Cras leo mauris,
          tristique in risus ac, tristique rutrum velit. Mauris accumsan tempor
          felis vitae gravida. Cras egestas convallis malesuada. Etiam ac ante
          id tortor vulputate pretium. Maecenas vel sapien suscipit, elementum
          odio et, consequat tellus.
        </li>
      </ol>

      <blockquote className="border-l-4 border-teal italic my-8 pl-8 md:pl-12">
        Example of blockquote - Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet
        ligula.
      </blockquote>

      <p className="py-6">Example code block:</p>
      <pre className="bg-black rounded text-white font-mono text-base p-2 md:p-4">
        <code className="break-words whitespace-pre-wrap">
          &lt;header className=&quot;site-header outer&quot;&gt; &lt;div
          className=&quot;inner&quot;&gt; &lt;/div&gt; &lt;/header&gt;
        </code>
      </pre>
    </div>
  );
};
