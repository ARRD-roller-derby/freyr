const Factory = <PROPS, USE_PROPS>(
  hook: (props: PROPS) => USE_PROPS,
  Component: React.FC<PROPS & USE_PROPS>
) =>  {
  return (props:React.PropsWithChildren<PROPS>) => <Component {...props} {...hook(props)} />;
} 

export default Factory