import React, { useEffect, useState, useRef } from "react";

const sections = [
  { id: "item-1", label: "Item 1", children: [
    { id: "item-1-1", label: "Item 1-1" },
    { id: "item-1-2", label: "Item 1-2" }
  ]},
  { id: "item-2", label: "Item 2", children: [] },
  { id: "item-3", label: "Item 3", children: [
    { id: "item-3-1", label: "Item 3-1" },
    { id: "item-3-2", label: "Item 3-2" }
  ]},
];

export default function SideBar() {
  const [activeId, setActiveId] = useState("item-1");
  const contentRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: contentRef.current,
      rootMargin: "0px 0px -80% 0px", // Trigger when 20% of section visible from top
      threshold: 0,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, observerOptions);

    const elements = contentRef.current.querySelectorAll("section[id]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const renderNavItems = (items) => (
    <ul>
      {items.map(({ id, label, children }) => (
        <li key={id} className="mb-1">
          <a
            href={`#${id}`}
            className={`block py-1 px-2 rounded font-medium text-sm cursor-pointer
              ${
                activeId === id
                  ? "text-blue-600 dark:text-blue-500 font-semibold"
                  : "text-gray-700 hover:text-gray-900 dark:text-neutral-400 dark:hover:text-neutral-300"
              }`}
          >
            {label}
          </a>
          {children.length > 0 && (
            <div className="ml-4">
              {renderNavItems(children)}
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-neutral-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 dark:bg-neutral-800 dark:border-neutral-700 overflow-y-auto">
        <nav className="p-4 sticky top-0">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Sidebar</h2>
          {renderNavItems(sections)}
        </nav>
      </aside>

      {/* Main content area */}
      <main
        ref={contentRef}
        className="flex-1 overflow-y-auto p-6 space-y-8 max-h-screen"
      >
        {sections.map(({ id, label, children }) => (
          <section key={id} id={id} className="scroll-mt-20">
            <h3 className="text-2xl font-bold mb-2 dark:text-white">{label}</h3>
            <p className="mb-4 text-gray-600 dark:text-neutral-400">
              Content for {label}... Scroll to see the active nav update.
            </p>
            {children.map(({ id: cid, label: clabel }) => (
              <section key={cid} id={cid} className="scroll-mt-20 mb-8">
                <h4 className="text-xl font-semibold mb-1 dark:text-white">{clabel}</h4>
                <p className="text-gray-600 dark:text-neutral-400">
                  Content for {clabel}... Keep scrolling.
                </p>
              </section>
            ))}
          </section>
        ))}
      </main>
    </div>
  );
}
