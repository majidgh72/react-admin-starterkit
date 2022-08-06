import { ReactNode } from "react";
import useStyles from './styles';

interface Props {
  children: ReactNode
}

function AuthLayout({ children } : Props) {

  const styles = useStyles();

  return (
    <div className={styles.AuthLayout}>{children}</div>
  )
}

export default AuthLayout;
