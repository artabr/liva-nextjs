export type TemplateNameProps = {
  title: string;
};

export const TemplateName = (props: TemplateNameProps) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};
