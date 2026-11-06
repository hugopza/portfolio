import { formatPostDate, publishedPosts, type WeeklyPost } from "../data/weekly";
import { TextArrow } from "../components/TextArrow";

export function Weekly({ post }: { post?: WeeklyPost }) {
  if (post) {
    return (
      <article className="page-layout weekly-page">
        <div className="page-intro weekly-intro">
          <a className="weekly-back" href="/weekly">
            All entries
          </a>
          <time className="weekly-date" dateTime={post.date}>
            {formatPostDate(post.date)}
          </time>
          <h1>{post.title}</h1>
          <p>{post.summary}</p>
        </div>
        <div className="weekly-article">
          {post.sections.map((section, index) => (
            <section key={index}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
              {section.links && section.links.length > 0 && (
                <ul className="weekly-sources">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.label}
                        <TextArrow />
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </article>
    );
  }

  return (
    <div className="page-layout weekly-page weekly-index">
      <div className="page-intro weekly-intro">
        <h1>Weekly</h1>
        <p>Notes on AI, projects and what I’m learning along the way.</p>
      </div>
      <div className="weekly-entries">
        {publishedPosts.length ? (
          <ul>
            {publishedPosts.map((entry) => (
              <li key={entry.slug}>
                <a className="weekly-entry" href={`/weekly/${entry.slug}`}>
                  <span className="weekly-entry-title">{entry.title}</span>
                  <time dateTime={entry.date}>{formatPostDate(entry.date)}</time>
                  <TextArrow />
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="weekly-empty">The first entry is on its way.</p>
        )}
      </div>
    </div>
  );
}
