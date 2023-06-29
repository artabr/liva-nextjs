import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';

export type MDXComponentProps = {
  code: string;
};

export const MDXComponent = ({ code }: MDXComponentProps) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return <Component />;
};
