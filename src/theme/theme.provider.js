//here import theme provider from styled components
//import your theme 


export const AppThemeProvider = ({children}) => (
    <ThemeProvider theme={theme}>
        {/* //here goes the global styles */}
        {children}
    </ThemeProvider>
)